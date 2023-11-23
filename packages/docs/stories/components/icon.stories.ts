// ---------------------------------------------------------------------
// 🔒 AUTOGENERATED BY VENDORISM
// Removing this comment will prevent it from being managed by it.
// ---------------------------------------------------------------------

/* eslint-disable */

/* eslint-disable import/no-relative-packages */

import '../../../components/src/components/icon/icon';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { storybookDefaults, storybookHelpers, storybookTemplate, generateStoryDescription } from '../../src/helpers/component.js';
const { args, argTypes } = storybookDefaults('syn-icon');
const { overrideArgs } = storybookHelpers('syn-icon');
const { generateTemplate } = storybookTemplate('syn-icon');

const meta: Meta = {
  component: 'icon',
  args: overrideArgs({ type: 'attribute', value: 'notifications', name: 'name' }, args),
  argTypes,
  title: 'Components/syn-icon',
  parameters: {
    docs: {
      description: {
        component: generateStoryDescription('icon', 'default'),
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
        story: generateStoryDescription('icon', 'default'),
      }
    }
  }
} as Story;


/**
 * Icons inherit their color from the current text color. Thus, you can set the color property on the <syn-icon> element or an ancestor to change the color.
 */
export const Colors: Story = {
  render: () => html`<div style="color: #4a90e2;">
  <syn-icon name="warning"></syn-icon>
  <syn-icon name="inventory"></syn-icon>
  <syn-icon name="battery_charging_full"></syn-icon>
  <syn-icon name="notifications"></syn-icon>
</div>
<div style="color: #9013fe;">
  <syn-icon name="schedule"></syn-icon>
  <syn-icon name="cloud"></syn-icon>
  <syn-icon name="download"></syn-icon>
  <syn-icon name="description"></syn-icon>
</div>
<div style="color: #417505;">
  <syn-icon name="flag"></syn-icon>
  <syn-icon name="favorite"></syn-icon>
  <syn-icon name="image"></syn-icon>
  <syn-icon name="bolt"></syn-icon>
</div>
<div style="color: #f5a623;">
  <syn-icon name="mic"></syn-icon>
  <syn-icon name="search"></syn-icon>
  <syn-icon name="star_border"></syn-icon>
  <syn-icon name="delete"></syn-icon>
</div>`,
};

/**
 * Icons are sized relative to the current font size. To change their size, set the font-size property on the icon itself or on a parent element as shown below.
 */
export const Sizing: Story = {
  render: () => html`<div style="font-size: 32px;">
  <syn-icon name="warning"></syn-icon>
  <syn-icon name="inventory"></syn-icon>
  <syn-icon name="battery_charging_full"></syn-icon>
  <syn-icon name="notifications"></syn-icon>
  <syn-icon name="schedule"></syn-icon>
  <syn-icon name="cloud"></syn-icon>
  <syn-icon name="download"></syn-icon>
  <syn-icon name="description"></syn-icon>
  <syn-icon name="flag"></syn-icon>
  <syn-icon name="favorite"></syn-icon>
  <syn-icon name="image"></syn-icon>
  <syn-icon name="bolt"></syn-icon>
  <syn-icon name="mic"></syn-icon>
  <syn-icon name="search"></syn-icon>
  <syn-icon name="star_border"></syn-icon>
  <syn-icon name="delete"></syn-icon>
</div>`,
};

/**
 * For non-decorative icons, use the label attribute to announce it to assistive devices.
 */
export const Labels: Story = {
  render: () => html`<syn-icon name="star" label="Add to favorites"></syn-icon>`,
};

/**
 * Custom icons can be loaded individually with the src attribute. Only SVGs on a local or CORS-enabled endpoint are supported. If you're using more than one custom icon, it might make sense to register a .
 */
export const CustomIcons: Story = {
  render: () => html`<syn-icon src="/logo-claim.svg" style="font-size: 10rem;"></syn-icon>`,
};
