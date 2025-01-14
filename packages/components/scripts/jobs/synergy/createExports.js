import fs from 'fs/promises';
import path from 'path';
import { getExportsListFromFileSystem, job } from '../shared.js';

/**
 * This function will create the src/synergy.ts file out of available components
 */
export const runCreateExports = job('Synergy: Creating component exports in src/synergy.ts...', async (componentsDir) => {
  const synergyMainFile = path.join(componentsDir, 'src/synergy.ts');

  const foundComponents = await getExportsListFromFileSystem(true);

  // Get the export list for of all components
  const exportList = foundComponents.map(
    c => `export { default as ${c.componentClass} } from './${c.componentImportPath}';`,
  );

  const otherExports = `
// Utilities
// export * from './utilities/animation.js';
export * from './utilities/base-path.js';
export * from './utilities/icon-library.js';
export * from './utilities/form.js';

export * from './components/combobox/option-renderer.js';

// Global settings
export * from './internal/defaultSettings/index.js';

// Events
export * from './events/events.js';
`;

  const output = [
    '// !!! This file is automatically generated via scripts/build.js',
    '// !!! Changes you apply to this file will get lost',
    '// !!! Please add your wanted changes to scripts/jobs/synergy/createExports.js',
    '// !!! and run `pnpm build` to recreate this file',
    '',
    '// Components',
    exportList.join('\n'),
    otherExports,
  ].join('\n');

  await fs.writeFile(synergyMainFile, output);
});
