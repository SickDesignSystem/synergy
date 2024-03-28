/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable import/no-relative-packages */
import '../../../components/src/components/nav-item/nav-item.js';
import '../../../components/src/components/prio-nav/prio-nav.js';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import {
  generateScreenshotStory,
  generateStoryDescription,
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
} from '../../src/helpers/component.js';

const { args: defaultArgs, argTypes } = storybookDefaults('syn-prio-nav');
const { overrideArgs } = storybookHelpers('syn-prio-nav');
const { generateTemplate } = storybookTemplate('syn-prio-nav');

const meta: Meta = {
  args: overrideArgs([
    {
      name: 'default',
      type: 'slot',
      value: `
        <syn-nav-item current>Domains</syn-nav-item>
        <syn-nav-item>Projects</syn-nav-item>
        <syn-nav-item>Trainings</syn-nav-item>
      `,
    },
  ], defaultArgs),
  argTypes,
  component: 'syn-prio-nav',
  parameters: {
    docs: {
      description: {
        component: generateStoryDescription('prio-nav', 'default'),
      },
      story: {
        height: '200px',
      },
    },
  },
  title: 'Components/syn-prio-nav',
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  parameters: {
    controls: {
      disable: false,
    },
    docs: {
      description: {
        story: generateStoryDescription('prio-nav', 'default'),
      },
    },
  },
  render: (args: unknown) => generateTemplate({ args }),
} as Story;

export const PriorityMenu = {
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('prio-nav', 'priority-menu'),
      },
    },
  },
  render: () => html`
    <syn-prio-nav style="width: 400px;">
      <syn-nav-item current>Domains</syn-nav-item>
      <syn-nav-item>Projects</syn-nav-item>
      <syn-nav-item>Trainings</syn-nav-item>
    </syn-prio-nav>
  `,
};

/**
 * Uncomment this to test automatic adding of items
 */
// const EXCESSIVE_TESTS = {
//   parameters: {
//     docs: {
//       description: {
//         story: generateStoryDescription('prio-nav', 'priority-menu'),
//       },
//     },
//   },
//   render: () => html`
//     <syn-prio-nav id="demo-ding">
//       <syn-nav-item current>Domains</syn-nav-item>
//       <syn-nav-item>Projects</syn-nav-item>
//       <syn-nav-item>Trainings</syn-nav-item>
//       <syn-nav-item>Item 1</syn-nav-item>
//       <syn-nav-item>Item 2</syn-nav-item> 
//       <syn-nav-item>Item 3</syn-nav-item>
//       <syn-menu-item href="#" role="menuitem">Hello</syn-menu-item>
//       <syn-nav-item>Item 4</syn-nav-item>
//     </syn-prio-nav>
//     <syn-button>Add an Item</syn-button>
//     <script type="module">
//     let x = 5;
//     document.querySelector('syn-button').addEventListener('click', () => {
//       const node = document.createElement('syn-nav-item');
//       node.innerText = 'Item ' + x;
//       x++;
//       document.querySelector('#demo-ding').appendChild(node);
//     });
//     </script>
//   `,
// };

// Bundled screenshot story
export const Screenshot: Story = generateScreenshotStory({
  Default,
  PriorityMenu,
});
