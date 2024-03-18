// ---------------------------------------------------------------------
// 🔒 AUTOGENERATED @synergy-design-system/react wrappers for @synergy-design-system/components
// Please do not edit this file directly!
// It will get recreated when running pnpm build.
// ---------------------------------------------------------------------
import * as React from 'react';
import { createComponent } from '@lit/react';
import Component from '@synergy-design-system/components/components/menu-label/menu-label.component.js';

const tagName = 'syn-menu-label';
Component.define('syn-menu-label');

/**
 * @summary Menu labels are used to describe a group of menu items.
 * @documentation https://synergy.style/components/menu-label
 * @status stable
 * @since 2.0
 *
 * @dependency syn-divider
 *
 * @slot - The menu label's content.
 *
 * @csspart base - The component's base wrapper.
 * @csspart divider - The divider that is displayed above the content
 * @csspart label - The label that is displayed below the divider
 *
 * @cssproperty --display-divider - Display property of the divider. Defaults to "block"
 */
export const SynMenuLabel = createComponent({
  displayName: 'SynMenuLabel',
  elementClass: Component,
  events: {

  },
  react: React,
  tagName,
});
