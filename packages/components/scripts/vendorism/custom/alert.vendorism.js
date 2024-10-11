import { replaceSections } from '../replace-section.js';
import { removeSections } from '../remove-section.js';

const FILES_TO_TRANSFORM = [
  'alert.styles.ts',
  'alert.component.ts',
];

/**
 * Transform the components styles
 * @param {String} path
 * @param {String} originalContent
 * @returns
 */
const transformStyles = (path, originalContent) => {
  const content = removeSections([
    // Remove all variant styles as they do not apply anymore
    ['.alert--primary', '.alert__message {', {
      preserveEnd: true,
      removePrecedingWhitespace: false,
    }],
  ], originalContent);

  return {
    content,
    path,
  };
};

const transformComponent = (path, originalContent) => {
  const content = replaceSections([
    // Begin remove countdown
    [
      "@property({ type: String, reflect: true }) countdown?: 'rtl' | 'ltr';",
      "countdown? : 'rtl' | 'ltr';",
    ],
    [
      "          'alert--has-countdown': !!this.countdown,\n",
      '',
    ],
    // End remove countdown.
  ], originalContent);
  return {
    content,
    path,
  };
};

export const vendorAlert = (path, content) => {
  const output = { content, path };

  // Skip for non select
  const isValidFile = !!FILES_TO_TRANSFORM.find(p => path.includes(p));

  if (!isValidFile) {
    return output;
  }

  if (path.endsWith('alert.styles.ts')) {
    return transformStyles(path, content);
  }

  if (path.endsWith('alert.component.ts')) {
    return transformComponent(path, content);
  }

  return output;
};
