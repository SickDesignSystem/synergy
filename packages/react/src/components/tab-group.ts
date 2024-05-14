// ---------------------------------------------------------------------
// 🔒 AUTOGENERATED @synergy-design-system/react wrappers for @synergy-design-system/components
// Please do not edit this file directly!
// It will get recreated when running pnpm build.
// ---------------------------------------------------------------------
import * as React from 'react';
import { createComponent } from '@lit/react';
import Component from '@synergy-design-system/components/components/tab-group/tab-group.component.js';

import { type EventName } from '@lit/react';
import type { SynTabHideEvent, SynTabShowEvent } from '@synergy-design-system/components';

const tagName = 'syn-tab-group';
Component.define('syn-tab-group');

/**
 * @summary Tab groups organize content into a container that shows one section at a time.
 * @documentation https://synergy.style/components/tab-group
 * @status stable
 * @since 2.0
 *
 * @dependency syn-icon-button
 *
 * @slot - Used for grouping tab panels in the tab group. Must be `<syn-tab-panel>` elements.
 * @slot nav - Used for grouping tabs in the tab group. Must be `<syn-tab>` elements.
 *
 * @event {{ name: String }} syn-tab-show - Emitted when a tab is shown.
 * @event {{ name: String }} syn-tab-hide - Emitted when a tab is hidden.
 *
 * @csspart base - The component's base wrapper.
 * @csspart nav - The tab group's navigation container where tabs are slotted in.
 * @csspart tabs - The container that wraps the tabs.
 * @csspart active-tab-indicator - The line that highlights the currently selected tab.
 * @csspart body - The tab group's body where tab panels are slotted in.
 * @csspart scroll-button - The previous/next scroll buttons that show when tabs are scrollable, an `<syn-icon-button>`.
 * @csspart scroll-button--start - The starting scroll button.
 * @csspart scroll-button--end - The ending scroll button.
 * @csspart scroll-button__base - The scroll button's exported `base` part.
 *
 * @cssproperty --indicator-color - The color of the active tab indicator.
 * @cssproperty --track-color - The color of the indicator's track (the line that separates tabs from panels).
 * @cssproperty --track-width - The width of the indicator's track (the line that separates tabs from panels).
 */
export const SynTabGroup = createComponent({
  displayName: 'SynTabGroup',
  elementClass: Component,
  events: {
    onSynTabShow: 'syn-tab-show' as EventName<SynTabShowEvent>,
    onSynTabHide: 'syn-tab-hide' as EventName<SynTabHideEvent>,
  },
  react: React,
  tagName,
});

export type { SynTabShowEvent } from '@synergy-design-system/components';
export type { SynTabHideEvent } from '@synergy-design-system/components';
