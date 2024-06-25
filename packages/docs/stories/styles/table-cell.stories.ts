/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable import/no-relative-packages */
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import {
  generateScreenshotStory,
  generateStoryDescription,
  storybookDefaults,
  storybookHelpers,
} from '../../src/helpers/component.js';
import { type RenderArgs, renderStyles } from '../../src/helpers/styles.js';
import { generateFigmaPluginObject } from '../../src/helpers/figma.js';

const { args: defaultArgs, argTypes } = storybookDefaults('syn-table-cell');
const { overrideArgs } = storybookHelpers('syn-table-cell');

const meta: Meta = {
  args: overrideArgs([
    {
      name: 'default',
      type: 'slot',
      value: 'Cell content',
    },
  ], defaultArgs),
  argTypes,
  component: 'syn-table-cell',
  parameters: {
    design: generateFigmaPluginObject('19479-134433'),
    docs: {
      description: {
        component: generateStoryDescription('styles', 'body'),
      },
    },
  },
  title: 'Styles/syn-table-cell',
};
export default meta;

export const Default: StoryObj = {
  parameters: {
    controls: {
      disable: false,
    },
  },
  render: (args: unknown) => html`
  <table class="syn-table">
    <tbody>
      <tr>
        ${renderStyles(({ ...(args as RenderArgs), sticky: true } as RenderArgs), 'td')}
      </tr>
    </tbody>
  </table>
  <style>
    .sticky {
      position: sticky;
    }
  </style>
  `,
};

export const Header: StoryObj = {
  render: () => html`
    <table class="syn-table">
      <thead>
        <tr>
          <th class="syn-table-cell--header">Cell header</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th class="syn-table-cell">Cell content</th>
        </tr>
      </tbody>
    </table>
  `,
};

export const Alternating: StoryObj = {
  render: () => html`
    <table class="syn-table">
      <tbody>
        <tr>
          <th class="syn-table-cell">Cell content</th>
        </tr>
        <tr>
          <th class="syn-table-cell syn-table-cell--bg-neutral-50 ">Cell content</th>
        </tr>
        <tr>
          <th class="syn-table-cell">Cell content</th>
        </tr>
        <tr>
          <th class="syn-table-cell syn-table-cell--bg-neutral-50 ">Cell content</th>
        </tr>
      </tbody>
    </table>
  `,
};

export const Border: StoryObj = {
  render: () => html`
    <table class="syn-table">
      <tbody>
        <tr>
          <th class="syn-table-cell syn-table-cell--border-top">Border Top</th>
        </tr>
        <tr>
          <th class="syn-table-cell syn-table-cell--border-start">Border Start</th>
        </tr>
        <tr>
          <th class="syn-table-cell syn-table-cell--border-end">Border End</th>
        </tr>
        <tr>
          <th class="syn-table-cell syn-table-cell--border-bottom">Border Left</th>
        </tr>
      </tbody>
    </table>
  `,
};

export const ScrollingBehavior: StoryObj = {
  render: () => html`
    <table class="syn-table">
      <thead>
        <tr>
          <th class="syn-table-cell--header syn-table-cell--shadow-bottom sticky">Cell header</th>
          <th class="syn-table-cell--header syn-table-cell--shadow-bottom sticky">Cell header</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th class="syn-table-cell">Cell content</th>
          <th class="syn-table-cell">Cell content</th>
        </tr>
      </tbody>
    </table>
    <style>
      .sticky {
        position: sticky;
      }
    </style>
  `,
};

/* eslint-disable sort-keys */
export const Screenshot: StoryObj = generateScreenshotStory({
  Default,
  Header,
  Alternating,
  Border,
});
/* eslint-enable sort-keys */