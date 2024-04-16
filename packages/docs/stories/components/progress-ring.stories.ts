// ---------------------------------------------------------------------
// 🔒 AUTOGENERATED BY VENDORISM
// Removing this comment will prevent it from being managed by it.
// ---------------------------------------------------------------------

/* eslint-disable */

/* eslint-disable import/no-relative-packages */

import '../../../components/src/components/progress-ring/progress-ring';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { storybookDefaults, storybookHelpers, storybookTemplate, generateStoryDescription } from '../../src/helpers/component.js';
const { args, argTypes } = storybookDefaults('syn-progress-ring');
const { overrideArgs } = storybookHelpers('syn-progress-ring');
const { generateTemplate } = storybookTemplate('syn-progress-ring');

const meta: Meta = {
  component: 'progress-ring',
  args,
  argTypes,
  title: 'Components/syn-progress-ring',
  parameters: {
    docs: {
      description: {
        component: generateStoryDescription('progress-ring', 'default'),
      },
    }
  }
};
export default meta;

type Story = StoryObj;

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  },
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('progress-ring', 'default'),
      }
    }
  }
} as Story;


/**
 * Use the --size custom property to set the diameter of the progress ring.
 */
export const Size: Story = {
  render: () => html`<syn-progress-ring value="50" style="--size: 200px;"></syn-progress-ring>`,
};

/**
 * Use the --track-width and --indicator-width custom properties to set the width of the progress ring's track and indicator.
 */
export const TrackAndIndicatorWidth: Story = {
  render: () => html`<syn-progress-ring value="50" style="--track-width: 6px; --indicator-width: 12px;"></syn-progress-ring>`,
};

/**
 * To change the color, use the --track-color and --indicator-color custom properties.
 */
export const Colors: Story = {
  render: () => html`<syn-progress-ring
  value="50"
  style="
    --track-color: pink;
    --indicator-color: deeppink;
  "
></syn-progress-ring>`,
};

/**
 * Use the label attribute to label the progress ring and tell assistive devices how to announce it.
 */
export const Labels: Story = {
  render: () => html`<syn-progress-ring value="50" label="Upload progress"></syn-progress-ring>`,
};

/**
 * Use the default slot to show a label inside the progress ring.
 */
export const ShowingValues: Story = {
  render: () => html`<syn-progress-ring value="50" class="progress-ring-values" style="margin-bottom: .5rem;">50%</syn-progress-ring>

<br />

<syn-button circle><syn-icon name="dash" label="Decrease"></syn-icon></syn-button>
<syn-button circle><syn-icon name="plus" label="Increase"></syn-icon></syn-button>

<script type="module">
  const progressRing = document.querySelector('.progress-ring-values');
  const subtractButton = progressRing.nextElementSibling.nextElementSibling;
  const addButton = subtractButton.nextElementSibling;

  addButton.addEventListener('click', () => {
    const value = Math.min(100, progressRing.value + 10);
    progressRing.value = value;
    progressRing.textContent = \`\${value}%\`;
  });

  subtractButton.addEventListener('click', () => {
    const value = Math.max(0, progressRing.value - 10);
    progressRing.value = value;
    progressRing.textContent = \`\${value}%\`;
  });
</script>`,
};
