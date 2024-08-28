/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable import/no-relative-packages */
import '../../../components/src/components/combobox/combobox';
import type { Meta, StoryObj } from '@storybook/web-components';
import type { SynCombobox } from '@synergy-design-system/components';
import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { userEvent } from '@storybook/test';
import {
  generateScreenshotStory,
  generateStoryDescription,
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
} from '../../src/helpers/component.js';
import { generateFigmaPluginObject } from '../../src/helpers/figma.js';

const { args, argTypes } = storybookDefaults('syn-combobox');
const { overrideArgs } = storybookHelpers('syn-combobox');
const { generateTemplate } = storybookTemplate('syn-combobox');

const meta: Meta = {
  args,
  argTypes,
  component: 'syn-combobox',
  parameters: {
    design: generateFigmaPluginObject('5069-7562'),
    docs: {
      description: {
        component: generateStoryDescription('select', 'default'),
      },
      story: {
        height: '250px',
      },
    },
  },
  title: 'Components/syn-combobox',
};
export default meta;

type Story = StoryObj;

const colors = [
  'Yellow',
  'Light Green',
  'Grey',
  'Green',
  'Blue',
  'Red',
  'Orange',
  'Magenta',
  'White',
  'Purple',
  'Pink',
  'Black',
  'Brown',
].sort();

const createColorOption = (color: string) => `<syn-option value="${color.replaceAll(' ', '_').toLowerCase().concat('bla')}">${color}</syn-option>`;

const createColorOptionHtml = (color: string) => unsafeHTML(createColorOption(color));

const createColorOptions = () => colors.map(createColorOption);

const createColorOptionsHtml = () => unsafeHTML(createColorOptions().join('\n'));

export const Default = {
  parameters: {
    args: overrideArgs({
      name: 'default',
      type: 'slot',
      value: createColorOptions().join('\n'),
    }, args),
    controls: {
      disable: false,
    },
    docs: {
      description: {
        // TODO: update asap as doc tokens are available
        // story: generateStoryDescription('select', 'default'),
      },
    },
  },
  render: (renderArgs: unknown) => generateTemplate({ args: renderArgs }),

} as Story;

export const Labels: Story = {
  parameters: {
    docs: {
      description: {
        // TODO: update asap as doc tokens are available
        // story: generateStoryDescription('select', 'labels'),
      },
    },
  },
  render: () => html`
    <syn-combobox label="Preferred Color">
      <syn-option value="opt-1">
        <syn-icon name="wallpaper"></syn-icon>
        Option 1
        <syn-icon name="add" slot="suffix"></syn-icon>
      </syn-option>
      <syn-option value="opt-2">
        <syn-icon name="wallpaper"></syn-icon>
        Option 2
        <syn-icon name="add" slot="suffix"></syn-icon>
      </syn-option>
      <syn-option value="opt-3">
        <syn-icon name="wallpaper"></syn-icon>
        Option 3
        <syn-icon name="add" slot="suffix"></syn-icon>
      </syn-option>
    </syn-combobox>
    <br/>
    <syn-combobox label="Preferred Color" class="highlight">
      <syn-option value="opt-1">
        <syn-icon name="wallpaper"></syn-icon>
        <span>
          Option 1
        </span>
        <syn-icon name="add" slot="suffix"></syn-icon>
      </syn-option>
      <syn-option value="opt-2">
        <syn-icon name="wallpaper"></syn-icon>
        <span>
          Option 2
        </span>
        <syn-icon name="add" slot="suffix"></syn-icon>
      </syn-option>
      <syn-option value="opt-3">
        <syn-icon name="wallpaper"></syn-icon>
        <span>
          Option 3
        </span>
        <syn-icon name="add" slot="suffix"></syn-icon>
      </syn-option>
    </syn-combobox>
    <script type="module">
      const combobox = document.querySelector('.highlight');
      combobox.getOption = (option, queryString) => {
        if(queryString) {
          const mark = document.createElement('mark');
          mark.textContent = queryString;
          const textNode = Array.from(option.children).find(child => child.tagName.toLowerCase() === 'span');
          textNode.innerHTML = textNode.textContent.replace(new RegExp(queryString, 'i'), mark.outerHTML);
        }
        return option; 
      }
    </script>
  `,
};

export const HelpText: Story = {
  parameters: {
    docs: {
      description: {
        // TODO: update asap as doc tokens are available
        // story: generateStoryDescription('select', 'labels'),
      },
    },
  },
  render: () => html`
    <syn-combobox label="Preferred Color" help-text="Select a color" clearable value="g">
      ${createColorOptionsHtml()}
    </syn-combobox>
    <script type="module">
      const combobox = document.querySelector('syn-combobox');
      // combobox.filter = (option, query) => {
      //   return option.getTextLabel().toLowerCase().includes('green');

      // }
      combobox.updateComplete.then(() => {
        combobox.show();
      });

      setTimeout(() => {
        combobox.getOption = (option, queryString) => {
          if(queryString) {
            const mark = document.createElement('mark');
            mark.textContent = queryString;
            option.innerHTML = option.getTextLabel().replace(new RegExp(queryString, 'i'), mark.outerHTML);
          }
          return option; 
        }
      }, 3000);
      // combobox.addEventListener('syn-change', (event) => {
      //   console.log('syn-change', combobox.value);
      // });
      // combobox.addEventListener('syn-input', (event) => {
      //   console.log('syn-input', combobox.value);
      // });
    </script>
  `,
};

export const Placeholder: Story = {
  parameters: {
    docs: {
      description: {
        // TODO: update asap as doc tokens are available
        // story: generateStoryDescription('select', 'labels'),
      },
    },
  },
  render: () => html`
    <syn-combobox label="Preferred Color" help-text="Select a color" placeholder="Selected color">
      ${createColorOptionsHtml()}
    </syn-combobox>
  `,
};

export const Focus: Story = {
  parameters: {
    chromatic: {
      disableSnapshot: false,
    },
    docs: {
      description: {
        // TODO: update asap as doc tokens are available
        // story: generateStoryDescription('select', 'labels'),
      },
    },
  },
  play: ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const elm = canvasElement.querySelector<SynCombobox>('syn-combobox');
    // eslint-disable-next-line max-len
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    elm?.focus();
  },
  render: () => html`
    <syn-combobox>
      ${createColorOptionsHtml()}
    </syn-combobox>
  `,
};

export const SimpleSuggests: Story = {
  parameters: {
    chromatic: {
      disableSnapshot: false,
    },
    docs: {
      description: {
        // TODO: update asap as doc tokens are available
        // story: generateStoryDescription('select', 'labels'),
      },
    },
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const combobox = canvasElement.querySelector<SynCombobox>('syn-combobox')!;
    await combobox.updateComplete;
    combobox.show();
  },
  render: () => html`
    <syn-combobox label="Preferred Color" value="g">
     ${createColorOptionsHtml()}
    </syn-combobox>
  `,
};

export const HighlightQuery: Story = {
  parameters: {
    chromatic: {
      disableSnapshot: false,
    },
    docs: {
      description: {
        // TODO: update asap as doc tokens are available
        // story: generateStoryDescription('select', 'labels'),
      },
    },
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const combobox = canvasElement.querySelector<SynCombobox>('syn-combobox')!;
    await combobox.updateComplete;
    combobox.show();
  },
  render: () => html`
    <syn-combobox label="Preferred color" class="highlight-combobox" value="g">
     ${createColorOptionsHtml()}
    </syn-combobox>
    <script type="module">
      const comboboxes = document.querySelectorAll('.highlight-combobox');
      comboboxes.forEach((combobox) => {
        combobox.getOption = (option, queryString) => {
          if(queryString) {
            const mark = document.createElement('mark');
            mark.textContent = queryString;
            option.innerHTML = option.getTextLabel().replace(new RegExp(queryString, 'i'), mark.outerHTML);
          }
          return option; 
        }
      });
    </script>
  `,
};

export const GroupingQuery: Story = {
  parameters: {
    chromatic: {
      disableSnapshot: false,
    },
    docs: {
      description: {
        // TODO: update asap as doc tokens are available
        // story: generateStoryDescription('select', 'labels'),
      },
    },
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const combobox = canvasElement.querySelector<SynCombobox>('syn-combobox')!;
    await combobox.updateComplete;
    combobox.show();
  },
  render: () => html`
    <syn-combobox label="Group elements" value="g">
      <syn-optgroup label="B">
        ${createColorOptionHtml('Black')}
        ${createColorOptionHtml('Blue')}
        ${createColorOptionHtml('Brown')}
      </syn-optgroup>
      <syn-optgroup label="G">
        ${createColorOptionHtml('Green')}
        ${createColorOptionHtml('Grey')}
      </syn-optgroup>
      <syn-optgroup label="L">
        ${createColorOptionHtml('Light Green')}
      </syn-optgroup>
      <syn-optgroup label="M">
        ${createColorOptionHtml('Magenta')}
      </syn-optgroup>
      <syn-optgroup label="O">
        ${createColorOptionHtml('Orange')}
      </syn-optgroup>
      <syn-optgroup label="W">
        ${createColorOptionHtml('White')}
      </syn-optgroup>
      <syn-optgroup label="P">
        ${createColorOptionHtml('Pink')}
        ${createColorOptionHtml('Purple')}
      </syn-optgroup>
      <syn-optgroup label="R">
        ${createColorOptionHtml('Red')}
      </syn-optgroup>
      <syn-optgroup label="W">
        ${createColorOptionHtml('White')}
      </syn-optgroup>
      <syn-optgroup label="Y">
        ${createColorOptionHtml('Yellow')}
      </syn-optgroup>
    </syn-combobox>
  `,
};

export const DynamicallyAddedOptions: Story = {
  parameters: {
    chromatic: {
      disableSnapshot: false,
    },
    docs: {
      description: {
        // TODO: update asap as doc tokens are available
        // story: generateStoryDescription('select', 'labels'),
      },
    },
  },
  render: () => html`
    <syn-combobox label="Dynamical options" class="dynamical-combobox">
      <syn-option value="option-1">Option 1</syn-option>
      <syn-option value="option-1">Option 2</syn-option>
      <syn-option value="option-1">Option 3</syn-option>
    </syn-combobox>
    <script type="module">
      const comboboxes = document.querySelectorAll('.dynamical-combobox');
      comboboxes.forEach((combobox) => {
        // After api request the options are added dynamically
        setTimeout(() => {
          const option = document.createElement('syn-option');
          option.value = 'option-4';
          option.textContent = 'Option 4';
          combobox.appendChild(option);
        }, 2000);
      });
    </script>
  `,
};

export const SuggestionContainerHeight: Story = {
  parameters: {
    chromatic: {
      disableSnapshot: false,
    },
    docs: {
      description: {
        // TODO: update asap as doc tokens are available
        // story: generateStoryDescription('select', 'labels'),
      },
    },
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const combobox = canvasElement.querySelector<SynCombobox>('syn-combobox')!;
    combobox.value = 'g';
    await combobox.updateComplete;
    combobox.show();
  },
  render: () => html`
    <syn-combobox id="max-height" label="Max Height for list">
      ${createColorOptionsHtml()}
    </syn-combobox>
    <style>
      #max-height::part(listbox) {
        max-height: 112px;
      }
    </style>
  `,
};

export const Clearable: Story = {
  parameters: {
    docs: {
      description: {
        // TODO: update asap as doc tokens are available
        // story: generateStoryDescription('select', 'labels'),
      },
    },
  },
  render: () => html`
    <syn-combobox value="Green" clearable>
      ${createColorOptionsHtml()}
    </syn-combobox>
  `,
};

export const Disabled: Story = {
  parameters: {
    docs: {
      description: {
        // TODO: update asap as doc tokens are available
        // story: generateStoryDescription('select', 'labels'),
      },
    },
  },
  render: () => html`
    <syn-combobox  disabled placeholder="Disabled">
      ${createColorOptionsHtml()}
    </syn-combobox>
  `,
};

export const Sizes: Story = {
  parameters: {
    docs: {
      description: {
        // TODO: update asap as doc tokens are available
        // story: generateStoryDescription('select', 'labels'),
      },
    },
  },
  render: () => html`
    <syn-combobox size="small" placeholder="Small">
      ${createColorOptionsHtml()}
    </syn-combobox>

    <br />

    <syn-combobox size="medium" placeholder="Medium">
      ${createColorOptionsHtml()}
    </syn-combobox>

    <br />

    <syn-combobox size="large" placeholder="Large">
      ${createColorOptionsHtml()}
    </syn-combobox>
  `,
};

export const Invalid: Story = {
  parameters: {
    chromatic: {
      disableSnapshot: false,
    },
    docs: {
      description: {
        // TODO: update asap as doc tokens are available
        // story: generateStoryDescription('select', 'labels'),
      },
    },
  },
  play: async ({ canvasElement }) => {
    const form = canvasElement.querySelector('form')!;
    const combobox = form.querySelector('syn-combobox');
    const button = form.querySelector('syn-button');

    if (button && combobox) {
      // make sure to always fire both events:
      // 1. userEvent.click is needed for storybooks play function to register
      // 2. button.click is needed to really click the button
      // userEvent.click works on native elements only
      await userEvent.click(button);
      button.click();
    }
  },
  render: () => html`
    <form class="custom-validity">
      <syn-combobox required placeholder="Type something" help-text="This is a help-text">
        ${createColorOptionsHtml()}
      </syn-combobox>
      <syn-button type="submit" variant="filled">Submit</syn-button>
    </form>
    <style>
    .custom-validity {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    syn-button {
      align-self: flex-start;
    }
    </style>
  `,
};

export const PrefixSuffixTextAndIcons: Story = {
  parameters: {
    docs: {
      description: {
        // TODO: update asap as doc tokens are available
        // story: generateStoryDescription('select', 'labels'),
      },
    },
  },
  render: () => html`
    <syn-combobox placeholder="Small" size="small" clearable>
      <span slot="prefix">prefix</span>
      <span slot="suffix">suffix</span>
      ${createColorOptionsHtml()}
    </syn-combobox>
    <br />
    <syn-combobox placeholder="Medium" size="medium" clearable>
      <span slot="prefix">prefix</span>
      <span slot="suffix">suffix</span>
      ${createColorOptionsHtml()}
    </syn-combobox>
    <br />
    <syn-combobox placeholder="Large" size="large" clearable>
      <span slot="prefix">prefix</span>
      <span slot="suffix">suffix</span>
      ${createColorOptionsHtml()}
    </syn-combobox>

    <br />

    <syn-combobox placeholder="Small" size="small" clearable>
      <syn-icon name="wallpaper" slot="prefix"></syn-icon>
      ${createColorOptionsHtml()}
      <syn-icon name="wallpaper" slot="suffix"></syn-icon>
    </syn-combobox>
    <br />
    <syn-combobox placeholder="Medium" size="medium" clearable>
      <syn-icon name="wallpaper" slot="prefix"></syn-icon>
      ${createColorOptionsHtml()}
      <syn-icon name="wallpaper" slot="suffix"></syn-icon>
    </syn-combobox>
    <br />
    <syn-combobox placeholder="Large" size="large" clearable>
      <syn-icon name="wallpaper" slot="prefix"></syn-icon>
      ${createColorOptionsHtml()}
      <syn-icon name="wallpaper" slot="suffix"></syn-icon>
    </syn-combobox>
  `,
};

// Bundled screenshot story
/* eslint-disable sort-keys */
export const Screenshot: Story = generateScreenshotStory({
  Default,
  Labels,
  HelpText,
  Placeholder,
  Clearable,
  Disabled,
  Sizes,
  PrefixSuffixTextAndIcons,
}, 500);
/* eslint-enable sort-keys */
