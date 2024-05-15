/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import '../../../components/src/components/tab-group/tab-group';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { pascalCase } from 'change-case';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import {
  generateScreenshotStory,
  generateStoryDescription, storybookDefaults, storybookHelpers, storybookTemplate,
} from '../../src/helpers/component.js';
import { generateFigmaPluginObject } from '../../src/helpers/figma.js';

const { args: defaultArgs, argTypes } = storybookDefaults('syn-tab-group');
const { overrideArgs } = storybookHelpers('syn-tab-group');
const { generateTemplate } = storybookTemplate('syn-tab-group');

const createTab = (
  panel: string,
  content: string,
  { disabled = false, closable = false } = {},
) => `<syn-tab slot="nav" panel="${panel}" ${disabled ? 'disabled' : ''} ${closable ? 'closable' : ''}>${content}</syn-tab>`;

const createTabHtml = (
  panel: string,
  content: string,
  { disabled = false, closable = false } = {},
) => unsafeHTML(createTab(panel, content, { closable, disabled }));

const createTabs = () => [
  { panel: 'general' },
  { panel: 'custom' },
  { panel: 'advanced' },
  { panel: 'disabled', props: { disabled: true } },
].map(({ panel, props }) => createTab(panel, pascalCase(panel), props)).join('\n');

const createTabsHtml = () => unsafeHTML(createTabs());

const createTabPanel = (name: string, content: string) => `<syn-tab-panel name="${name}">${content}</syn-tab-panel>`;

const createTabPanelHtml = (
  name: string,
  content: string,
) => unsafeHTML(createTabPanel(name, content));

const createTabPanels = () => [
  'general',
  'custom',
  'advanced',
  'disabled',
].map((name) => createTabPanel(name, `This is the ${name} tab panel.`)).join('\n');

const createTabPanelsHtml = () => unsafeHTML(createTabPanels());

const meta: Meta = {
  args: overrideArgs([
    {
      name: 'default',
      type: 'slot',
      value: createTabPanels(),
    },
    {
      name: 'nav',
      type: 'slot',
      value: createTabs(),
    },
  ], defaultArgs),
  argTypes,
  component: 'syn-tab-group',
  parameters: {
    design: generateFigmaPluginObject('18021-1924779'),
    docs: {
      description: {
        component: generateStoryDescription('tab-group', 'default'),
      },
    },
  },
  title: 'Components/syn-tab-group',
};
export default meta;

type Story = StoryObj;

export const Default = {
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('tab-group', 'default'),
      },
    },
  },
  render: (args: unknown) => generateTemplate({ args }),
} as Story;

export const TabsOnStart: Story = {
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('tab-group', 'start'),
      },
    },
  },
  render: () => html`
  <syn-tab-group placement="start">
    ${createTabsHtml()}
    ${createTabPanelsHtml()}
  </syn-tab-group>
  `,
};

export const TabsOnEnd: Story = {
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('tab-group', 'end'),
      },
    },
  },
  render: () => html`
  <syn-tab-group placement="end">
    ${createTabsHtml()}
    ${createTabPanelsHtml()}
  </syn-tab-group>
  `,
};

export const ClosableTabs: Story = {
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('tab-group', 'end'),
      },
    },
  },
  render: () => html`
    <syn-tab-group class="tabs-closable">
      <!-- Tabs -->
      ${[
      { content: 'General', panel: 'general' },
      { content: 'Closable 1', panel: 'closable-1', props: { closable: true } },
      { content: 'Closable 2', panel: 'closable-2', props: { closable: true } },
      { content: 'Closable 3', panel: 'closable-3', props: { closable: true } },
    ]
      .map(({ content, panel, props }) => createTabHtml(panel, content, props))
    }

      <!-- Tab Panels  -->
      ${[
      { content: 'general', name: 'general' },
      { content: 'first closable', name: 'closable-1' },
      { content: 'second closable', name: 'closable-2' },
      { content: 'third closable', name: 'closable-3' },
    ]
      .map(({ content, name }) => createTabPanelHtml(name, `This is the ${content} tab panel.`))
    }
    </syn-tab-group>

    <script type="module">
      const tabGroup = document.querySelector('.tabs-closable');
      tabGroup.addEventListener('syn-close', async event => {
        const tab = event.target;
        const panel = tabGroup.querySelector(\`syn-tab-panel[name="\${tab.panel}"]\`);
        
        // Show the previous tab if the tab is currently active
        if (tab.active) {
          tabGroup.show(tab.previousElementSibling.panel);
        }

        // Remove the tab + panel
        tab.remove();
        panel.remove();
      });
    </script>
  `,
};

export const ScrollingTabs: Story = {
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('tab-group', 'scrolling'),
      },
    },
  },
  render: () => html`
    <syn-tab-group>
      <!-- Tabs -->
      ${['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20']
      .map(count => createTabHtml(`tab-${count}`, `Tab ${count}`))
    }

      <!-- Tab Panels -->
      ${['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20']
      .map(count => createTabPanelHtml(`tab-${count}`, `Tab panel ${count}`))
    }
  </syn-tab-group>`,
};

export const ManualActivation: Story = {
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('tab-group', 'manuel'),
      },
    },
  },
  render: () => html`
    <syn-tab-group activation="manual">
      ${createTabsHtml()}
      ${createTabPanelsHtml()}
    </syn-tab-group>
  `,
};

/* eslint-disable sort-keys */
export const Screenshot: Story = generateScreenshotStory({
  Default,
  TabsOnStart,
  TabsOnEnd,
  ClosableTabs,
  ScrollingTabs,
  ManualActivation,
}, 300);
/* eslint-enable sort-keys */
