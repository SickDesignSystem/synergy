/* eslint-disable no-console */
import fs from 'fs/promises';
import fsSync from 'fs';
import path from 'path';
import url from 'url';
import { exec } from 'child_process';
import util from 'util';
import prettier from 'prettier';
import { deleteAsync } from 'del';
import { globby } from 'globby';
import chalk from 'chalk';
import ora from 'ora';
import { pascalCase } from 'change-case';
import { optimizePathForWindows } from 'vendorism/src/scripts/helpers.js';

// eslint-disable-next-line import/no-relative-packages
import prettierConfig from '../../../../prettier.config.js';

const spinner = ora({ hideCursor: false });

/**
 * @var {array} ALL_COMPONENTS Cached list of components
 * @see getAllComponents
 */
let ALL_COMPONENTS;

/**
 * @var {array} EXPORTED_COMPONENTS Cached list of exported components
 * @see getExportsListFromFileSystem
 */
let EXPORTED_COMPONENTS;

/**
 * Sort function, used to sort components by name
 * @param {Object} a Component A
 * @param {Object} b Component B
 * @returns Sorted object
 */
const sortByComponentName = (a, b) => {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
};

/**
 * Create a job that when run executes the given actions
 * @param {String} label The label to show
 * @param {Function} action The action to run
 * @returns {Function} A function with bound arguments useable in the build pipeline
 */
export const job = (label, action) => async (...args) => {
  spinner.text = label;
  spinner.start();

  try {
    await action(...args);
    spinner.succeed();
  } catch (err) {
    spinner.fail(`${label}: ${err.toString()}`);
    process.exit(1);
  }
};

/**
 * Creates an async version of exec
 */
export const execPromise = util.promisify(exec);

/**
 * Get the absolute path of one to many path parts,
 * relative to the `components/scripts` directory
 *
 * @param {String} wantedPath
 * @returns {String} The absolute path to the components/scripts directory
 */
export const getPath = (wantedPath) => path.join(
  path.dirname(path.join(url.fileURLToPath(import.meta.url), '..')),
  wantedPath,
);

/**
 * Format a file using prettier
 * @param {String} filePath Path to the wanted file
 * @param {String} parser One of the parsers available in prettier
 */
export const formatFile = async (filePath, parser) => {
  const blob = await fs.readFile(filePath);
  const formattedFile = await prettier.format(blob.toString(), {
    ...prettierConfig,
    parser,
  });

  await fs.writeFile(filePath, formattedFile);
};

/**
 * Get the path to the components package.json file
 * @returns {object} Contents of to package.json
 */
export const getPackageJSONAsObject = () => JSON.parse(fsSync.readFileSync(getPath('../package.json')), 'utf-8');

/**
 * Sync the package.json version field located in outputPackageDir
 * with the one provided from componentsPackageDir
 * @param {string} label The label
 * @returns {job}
 */
export const runAdjustPackageVersion = (label) => job(label, async (
  componentsPackageDir,
  outputPackageDir,
) => {
  // Get the version field from the components package.json
  const componentPackageAsString = await fs.readFile(path.join(componentsPackageDir, 'package.json'), {
    encoding: 'utf-8',
  });
  const { version } = JSON.parse(componentPackageAsString);

  // Get the wrappers package.json
  const packageJSONPath = path.join(outputPackageDir, 'package.json');
  const packageAsString = await fs.readFile(packageJSONPath);
  const packageAsJSON = JSON.parse(packageAsString);

  // Write out the changed package.json file with adjusted version
  // and format it using prettier
  await fs.writeFile(
    packageJSONPath,
    JSON.stringify({ ...packageAsJSON, version }),
  );

  await formatFile(packageJSONPath, 'json-stringify');
});

/**
 * Prepares directories by removing them and creating them anew
 * @param {string} label The label to use
 * @returns {job}
 */
export const createRunPrepare = (label) => job(label, async (...dirs) => {
  // Remove all directories
  await Promise.all(
    dirs.map(dir => deleteAsync(dir, { force: true })),
  );

  // Create all directories
  await Promise.all(
    dirs.map(dir => fs.mkdir(dir, {
      recursive: true,
    })),
  );
});

/**
 * Creates a framework header that will be used to prepend on generated files
 * @param {string} framework The framework to use
 * @returns {string} The generated header
 */
export const createHeader = framework => `
// ---------------------------------------------------------------------
// 🔒 AUTOGENERATED @synergy-design-system/${framework} wrappers for @synergy-design-system/components
// Please do not edit this file directly!
// It will get recreated when running pnpm build.
// ---------------------------------------------------------------------   
`.trim();

/**
 * Get the complete list of exports from the file system
 * @param {boolean} warn Show warning messages when skipping an entry?
 */
export const getExportsListFromFileSystem = async (warn = false) => {
  // Make sure to use the cache when calling the function again
  if (EXPORTED_COMPONENTS) {
    return EXPORTED_COMPONENTS;
  }

  const componentsDir = getPath('../src/components');
  const optimizedPath = optimizePathForWindows(componentsDir);

  // Only treat components as available if there is a COMPONENTNAME.component.ts!
  const foundComponents = await globby(`${optimizedPath}/**/*.component.ts`);

  EXPORTED_COMPONENTS = foundComponents
    .sort()
    .map(c => c.split('/').at(-1))
    .map(c => c.replace(/\.component\.ts$/, ''))
    .map(c => ({
      componentAbsolutePath: optimizePathForWindows(path.join(
        optimizedPath,
        c,
        `${c}.ts`,
      )),
      componentClass: pascalCase(`Syn-${c}`),
      componentImportPath: optimizePathForWindows(path.join('components', c, `${c}.js`)),
      componentName: c,
    }))
    .filter(c => {
      const available = fsSync.existsSync(c.componentAbsolutePath);

      // Make sure to warn user if it seems we missed an export
      if (!available && warn) {
        console.warn(`\n${chalk.yellow('⚠')} Warning: Not exporting component <${c.componentClass} /> as there is no export file found. Please create ${c.componentAbsolutePath} to export this file`);
      }

      return available;
    });

  return EXPORTED_COMPONENTS;
};

/**
 * Get all available components out of the metadata
 * @param {object} metadata Metadata, usually from components.json
 * @returns {array} List of components
 */
export const getAllComponents = async (metadata) => {
  // Make sure to use the cache when calling the function again
  if (ALL_COMPONENTS) {
    return ALL_COMPONENTS;
  }

  const allComponents = [];

  const exportedComponents = await getExportsListFromFileSystem(false);
  const exportedComponentsWithoutPrefix = exportedComponents.map(c => c.componentName);

  metadata.modules.forEach(module => {
    module.declarations?.forEach(declaration => {
      if (declaration.customElement) {
        const component = declaration;
        if (component && exportedComponentsWithoutPrefix.includes(component.tagNameWithoutPrefix)) {
          allComponents.push(Object.assign(component, {
            path: module.path,
          }));
        }
      }
    });
  });

  // Make sure to always sort alphabetically as this will otherwise trigger bad effects
  ALL_COMPONENTS = [...allComponents].sort(sortByComponentName);

  return ALL_COMPONENTS;
};

/**
 * Create a function that uppercases or lowercases the first letter of its argument
 * @param {string} method The method to use. May be toLowerCase or toUpperCase
 * @returns {function} A function that will either lower or uppercase the first letter
 */
export const changeFirstLetter = method => string => string.charAt(0)[method]() + string.slice(1);

/**
 * Lower case the first letter of string
 * @param {string} Input string
 * @returns {string}
 */
export const lcFirstLetter = changeFirstLetter('toLowerCase');

/**
 * Upper case the first letter
 * @param {string} Input string
 * @returns {string}
 */
export const ucFirstLetter = changeFirstLetter('toUpperCase');

/**
 * Creates a string that represents the index.js file for all components
 * @param {string} headerComment Comment to prefix
 * @param {object[]} Array of name and output path objects
 * @param {boolean} useDefaultExport [optional] Use default export instead of named ones?
 * @returns {string} The index.js output
 */
export const createFrameworkIndex = (
  headerComment,
  components = [],
  useDefaultExport = false,
) => {
  // Always sort the included scripts as otherwise we would have unneeded index.js changes
  // due to the fact that the order is not treated well
  const alphabeticIndex = [...components]
    .sort(sortByComponentName)
    .map(({ name, outputPath }) => {
      // When we use useDefaultExport,
      // make sure to export the default as named export
      // This is for example needed for vue sfc
      const exportStatement = useDefaultExport ? `default as ${name}` : name;
      return `export { ${exportStatement} } from '${outputPath}';`;
    });

  return [
    headerComment,
    alphabeticIndex.join('\n'),
    '',
  ].join('\n');
};

/**
 * List of components names that two way data binding is enabled for
 * @var {string[]}
 */
export const TWOWAY_BINDING_ENABLED_ELEMENTS = [
  'checkbox',
  'input',
  'radio-group',
  'select',
  'switch',
  'textarea',
  'combobox',
];

/**
 * Check if a given component is enabled for two way data binding
 * @param {string} componentName
 * @returns {boolean}
 */
export const getIsTwoWayBindingEnabledFor = (componentName) => TWOWAY_BINDING_ENABLED_ELEMENTS
  .includes(componentName);

/**
 * Get the attribute that should be bound via two way data binding
 * @param {string} componentName Name of the component
 * @returns {string} Name of the attribute to use
 */
export const getControlAttributeForTwoWayBinding = (componentName) => {
  switch (componentName) {
  case 'checkbox':
  case 'switch':
    return 'checked';
  default:
    return 'value';
  }
};

/**
 * Get the event attributes name used for two way data binding
 * @param {string} componentName Name of the component
 * @returns The name of the event that should be used to add the binding
 */
export const getEventAttributeForTwoWayBinding = (componentName) => {
  switch (componentName) {
  default: return 'syn-input';
  }
};

/**
 * Turns a string into a multiline js comment
 * @param {string} str The input string that should be commented
 * @param {string} [optional] splitToken The token that should be used to split
 * @returns {string} The javascript comment
 */
export const createComment = (str, splitToken = '. ') => {
  if (!str) return '';

  const lines = str
    .split(splitToken)
    .map(line => line.trim())
    .filter(Boolean)
    .map(line => `* ${line}`)
    .join('.\n');
  return `
/**
${lines}
 */`;
};
