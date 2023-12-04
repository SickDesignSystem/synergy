/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { SynButton, SynCheckbox } from '@synergy-design-system/components';
import '../../../components/src/components/checkbox/checkbox';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { userEvent } from '@storybook/testing-library';
import { waitUntil } from '@open-wc/testing-helpers';
import docsTokens from '../../../tokens/src/figma-tokens/_docs.json';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../src/helpers/component.js';

const { args, argTypes } = storybookDefaults('syn-checkbox');
const { overrideArgs } = storybookHelpers('syn-checkbox');
const { generateTemplate } = storybookTemplate('syn-checkbox');

const generateStoryDescription = (attributeName: string) => {
  const story = (docsTokens?.components?.checkbox as Record<string, any>)?.[attributeName]?.description?.value ?? 'No Description';
  return {
    story,
  };
};

const meta: Meta = {
  args: overrideArgs([
    { name: 'default', type: 'slot', value: 'Checkbox' },
  ]),
  argTypes,
  parameters: {
    docs: {
      description: generateStoryDescription('default'),
    },
  },
  title: 'Components/syn-checkbox',
};
export default meta;

type Story = StoryObj;

export const Default = {
  parameters: {
    docs: {
      description: generateStoryDescription('default'),
    },
  },
  render: (args: any) => generateTemplate({ args }),
} as Story;

export const Checked: Story = {
  parameters: {
    docs: {
      description: generateStoryDescription('checked'),
    },
  },
  render: () => html`<syn-checkbox checked>Checked</syn-checkbox>`,
};

export const Indeterminate: Story = {
  parameters: {
    docs: {
      description: generateStoryDescription('indeterminate'),
    },
  },
  render: () => html`<syn-checkbox indeterminate>Indeterminate</syn-checkbox>`,
};

export const Disabled: Story = {
  parameters: {
    docs: {
      description: generateStoryDescription('disabled'),
    },
  },
  render: () => html`<syn-checkbox disabled>Disabled</syn-checkbox>`,
};

export const Sizes: Story = {
  parameters: {
    docs: {
      description: generateStoryDescription('sizes'),
    },
  },
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <syn-checkbox size="small">Small</syn-checkbox>
      <syn-checkbox size="medium">Medium</syn-checkbox>
      <syn-checkbox size="large">Large</syn-checkbox>
    </div>
  `,
};

export const CustomValidity: Story = {
  parameters: {
    docs: {
      description: generateStoryDescription('validity'),
    },
  },
  play: async ({ canvasElement }) => {
    try {
      const form = canvasElement.querySelector('form');
      const button = canvasElement.querySelector('syn-button') as SynButton;
      const checkbox = canvasElement.querySelector('syn-checkbox') as SynCheckbox;
      const errorMessage = "Don't forget to check me!";

      if (form && button && checkbox) {
        checkbox.setCustomValidity(errorMessage);

        // make sure to always fire both events:
        // 1. userEvent.click is needed for storybooks play function to register
        // 2. button.click is needed to really click the button
        // userEvent.click works on native elements only
        await userEvent.click(button);
        button.click();
      }
    } catch (error) {
      console.error('Error in play function:', error);
    }
  },
  render: () => html`
    <form class="custom-validity">
      <syn-checkbox name="checked" value="on">Check me</syn-checkbox>
      <syn-button type="submit" variant="filled">Submit</syn-button>
    </form>
    <style>
    .custom-validity {
      display: inline-flex;
      flex-direction: column;
      gap: 1rem;
    }
    </style>

    <script type="module">
    const form = document.querySelector('.custom-validity');
    const checkbox = form.querySelector('syn-checkbox');
    const errorMessage = "Don't forget to check me!";

    // Update validity on change
    checkbox.addEventListener('syn-change', () => {
      checkbox.setCustomValidity(checkbox.checked ? '' : errorMessage);
    });

    // Handle submit
    form.addEventListener('submit', event => {
      event.preventDefault();
      alert('All fields are valid!');
    });
    </script>
  `,
};
