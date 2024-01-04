/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable import/no-relative-packages */

import '../../../components/src/components/switch/switch.js';
import type { Meta, StoryObj } from '@storybook/web-components';
import type { SynButton, SynSwitch } from '@synergy-design-system/components';
import { html } from 'lit';
import { userEvent } from '@storybook/testing-library';
import {
  generateScreenshotStory,
  generateStoryDescription,
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
} from '../../src/helpers/component.js';

const { args, argTypes } = storybookDefaults('syn-switch');
const { overrideArgs } = storybookHelpers('syn-switch');
const { generateTemplate } = storybookTemplate('syn-switch');

const meta: Meta = {
  args: overrideArgs({ name: 'default', type: 'slot', value: 'Option' }, args),
  argTypes,
  component: 'switch',
  parameters: {
    docs: {
      description: {
        component: generateStoryDescription('switch', 'default'),
      },
    },
  },
  title: 'Components/syn-switch',
};
export default meta;

type Story = StoryObj;

export const Default = {
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('switch', 'default'),
      },
    },
  },
  render: (storyArgs: unknown) => generateTemplate({ args: storyArgs }),
} as Story;

export const Checked: Story = {
  name: 'Checked',
  parameters: {
    controls: {
      disable: true,
    },
    docs: {
      description: {
        story: generateStoryDescription('switch', 'checked'),
      },
    },
  },
  render: () => html`<syn-switch checked>Checked</syn-switch>`,
};

export const Disabled: Story = {
  name: 'Disabled',
  parameters: {
    controls: {
      disable: true,
    },
    docs: {
      description: {
        story: generateStoryDescription('switch', 'disabled'),
      },
    },
  },
  render: () => html`<syn-switch disabled>Disabled</syn-switch>`,
};

export const Focus: Story = {
  name: 'Focus',
  parameters: {
    chromatic: {
      disableSnapshot: false,
    },
    controls: {
      disable: true,
    },
    docs: {
      description: {
        story: generateStoryDescription('switch', 'focus'),
      },
    },
  },
  play: ({ canvasElement }) => {
    const synSwitch = canvasElement.querySelector('syn-switch') as SynSwitch;
    if (synSwitch) {
      if (synSwitch) {
        synSwitch.focus();
      }
    }
  },
  render: () => html`<syn-switch>Focused</syn-switch>`,
};

export const Invalid: Story = {
  name: 'Invalid',
  parameters: {
    chromatic: {
      disableSnapshot: false,
    },
    controls: {
      disable: true,
    },
    docs: {
      description: {
        story: generateStoryDescription('switch', 'invalid'),
      },
    },
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    try {
      const form = canvasElement.querySelector('form');
      const synSwitch = form?.querySelector('syn-switch') as SynSwitch;
      const button = form?.querySelector('syn-button') as SynButton;

      if (button && synSwitch) {
        await userEvent.click(button);
        button.click();
      }
    } catch (error) {
      console.error('Error in play function:', error);
    }
  },
  render: () => html`
    <form class="custom-validity">
      <syn-switch required>Option</syn-switch>
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

export const Sizes: Story = {
  name: 'Sizes',
  parameters: {
    controls: {
      disable: true,
    },
    docs: {
      description: {
        story: generateStoryDescription('switch', 'sizes'),
      },
    },
  },
  render: () => html`
  <syn-switch size="small">Small</syn-switch><br>
  <syn-switch size="medium">Medium</syn-switch><br>
  <syn-switch size="large">Large</syn-switch>`,
};

// Bundled screenshot story
const bundledStories: Array<Story> = [
  Disabled,
  Sizes,
];

export const Screenshot: Story = generateScreenshotStory(bundledStories);
