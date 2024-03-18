// ---------------------------------------------------------------------
// 🔒 AUTOGENERATED @synergy-design-system/react wrappers for @synergy-design-system/components
// Please do not edit this file directly!
// It will get recreated when running pnpm build.
// ---------------------------------------------------------------------
import * as React from 'react';
import { createComponent } from '@lit/react';
import Component from '@synergy-design-system/components/components/dropdown/dropdown.component.js';

import { type EventName } from '@lit/react';
import type {
  SynAfterHideEvent, SynAfterShowEvent, SynHideEvent, SynShowEvent,
} from '@synergy-design-system/components';

const tagName = 'syn-dropdown';
Component.define('syn-dropdown');

/**
 * @summary Dropdowns expose additional content that "drops down" in a panel.
 * @documentation https://synergy.style/components/dropdown
 * @status stable
 * @since 2.0
 *
 * @dependency syn-popup
 *
 * @slot - The dropdown's main content.
 * @slot trigger - The dropdown's trigger, usually a `<syn-button>` element.
 *
 * @event syn-show - Emitted when the dropdown opens.
 * @event syn-after-show - Emitted after the dropdown opens and all animations are complete.
 * @event syn-hide - Emitted when the dropdown closes.
 * @event syn-after-hide - Emitted after the dropdown closes and all animations are complete.
 *
 * @csspart base - The component's base wrapper.
 * @csspart trigger - The container that wraps the trigger.
 * @csspart panel - The panel that gets shown when the dropdown is open.
 *
 * @animation dropdown.show - The animation to use when showing the dropdown.
 * @animation dropdown.hide - The animation to use when hiding the dropdown.
 */
export const SynDropdown = createComponent({
  displayName: 'SynDropdown',
  elementClass: Component,
  events: {
    onSynShow: 'syn-show' as EventName<SynShowEvent>,
    onSynAfterShow: 'syn-after-show' as EventName<SynAfterShowEvent>,
    onSynHide: 'syn-hide' as EventName<SynHideEvent>,
    onSynAfterHide: 'syn-after-hide' as EventName<SynAfterHideEvent>,
  },
  react: React,
  tagName,
});

export type { SynShowEvent } from '@synergy-design-system/components';
export type { SynAfterShowEvent } from '@synergy-design-system/components';
export type { SynHideEvent } from '@synergy-design-system/components';
export type { SynAfterHideEvent } from '@synergy-design-system/components';
