/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable import/no-relative-packages */

import '../../../components/src/components/tag/tag';
import type { Meta, StoryObj } from '@storybook/web-components';
import type { SynTag } from '@synergy-design-system/components';
import { html } from 'lit';
import { generateStoryDescription, storybookDefaults } from '../../src/helpers/component.js';

const { args, argTypes } = storybookDefaults('syn-tag');

const meta: Meta = {
  component: 'tag',
  args,
  argTypes,
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('tag', 'default'),
      },
    },
  },
  title: 'Components/syn-tag',
};
export default meta;

type Story = StoryObj;

export const Default = {
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('tag', 'default'),
      },
    },
  },
  render: () => html`<syn-tag>Option</syn-tag>`,
} as Story;

export const Focus: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  play: ({ canvasElement }) => {
    const tag = canvasElement.querySelector('syn-tag') as SynTag;
    if (tag) {
      tag.focus();
    }
  },
  render: () => html`
  <syn-tag removable>Option</syn-tag>`,
};

export const WithIcon: Story = {
  render: () => html`
  <syn-tag>
    <syn-icon name="wallpaper"></syn-icon>
    Option
 </syn-tag>`,
};

export const WithIconAndRemovable: Story = {
  render: () => html`
  <syn-tag removable>
    <syn-icon name="wallpaper"></syn-icon>
    Option
 </syn-tag>`,
};

export const Sizes: Story = {
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('tag', 'size'),
      },
    },
  },
  render: () => html`
  <syn-tag size="small">Small</syn-tag>
  <syn-tag size="medium">Medium</syn-tag>
  <syn-tag size="large">Large</syn-tag>`,
};

export const Removable: Story = {
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('tag', 'removable'),
      },
    },
  },
  render: () => html`
    <div class="tags-removable">
      <syn-tag size="small" removable>Small</syn-tag>
      <syn-tag size="medium" removable>Medium</syn-tag>
      <syn-tag size="large" removable>Large</syn-tag> 
    </div>

    <script type="module">
      const div = document.querySelector('.tags-removable');

      div.addEventListener('syn-remove', event => {
        const tag = event.target;
        tag.style.opacity = '0';
        setTimeout(() => (tag.style.opacity = '1'), 2000);
      });
    </script>

    <style>
      .tags-removable syn-tag {
        transition: var(--syn-transition-medium) opacity;
      }
    </style>`,
};
