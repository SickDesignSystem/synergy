// ---------------------------------------------------------------------
// 🔒 AUTOGENERATED @synergy-design-system/react wrappers for @synergy-design-system/components
// Please do not edit this file directly!
// It will get recreated when running pnpm build.
// ---------------------------------------------------------------------
import * as React from 'react';
import { createComponent } from '@lit/react';
import Component from '@synergy-design-system/components/components/range/range.component.js';

import { type EventName } from '@lit/react';
import type { SynBlurEvent } from '@synergy-design-system/components';
import type { SynChangeEvent } from '@synergy-design-system/components';
import type { SynFocusEvent } from '@synergy-design-system/components';
import type { SynInputEvent } from '@synergy-design-system/components';
import type { SynInvalidEvent } from '@synergy-design-system/components';
import type { SynMoveEvent } from '@synergy-design-system/components';

const tagName = 'syn-range';
Component.define('syn-range');

/**
 * @summary Ranges allow the user to select values within a given range using one or two thumbs.
 * @documentation https://synergy-design-system.github.io/?path=/docs/components-syn-range--docs
 * @status stable
 *
 * @dependency syn-tooltip
 *
 * @slot label - The range's label. Alternatively, you can use the `label` attribute.
 * @slot prefix - Used to prepend a presentational icon or similar element to the range.
 * @slot suffix - Used to append a presentational icon or similar element to the range.
 * @slot help-text - Text that describes how to use the range.
 * Alternatively, you can use the `help-text` attribute.
 * @slot ticks - Used to display tick marks at specific intervals along the range.
 *
 * @event syn-blur - Emitted when the control loses focus.
 * @event syn-change - Emitted when an alteration to the control's value is committed by the user.
 * @event syn-focus - Emitted when the control gains focus.
 * @event syn-input - Emitted when the control receives input.
 * @event syn-invalid - Emitted when the form control has been checked for validity
 * and its constraints aren't satisfied.
 * @event syn-move - Emitted when the user moves a thumb, either via touch or keyboard.
 * Use `Event.preventDefault()` to prevent movement.
 *
 * @csspart form-control - The form control that wraps the label, input, and help text.
 * @csspart form-control-label - The label's wrapper.
 * @csspart form-control-help-text - The help text's wrapper.
 * @csspart base - The component's base wrapper.
 * @csspart input-wrapper - The container that wraps the input track and ticks.
 * @csspart track-wrapper - The wrapper for the track.
 * @csspart track - The inactive track.
 * @csspart active-track - The active track.
 * @csspart prefix - The container that wraps the prefix.
 * @csspart suffix - The container that wraps the suffix.
 * @csspart ticks - The container that wraps the tick marks.
 * @csspart thumb - The thumb(s) that the user can drag to change the range.
 *
 * @csspart tooltip__base - The base of the tooltip
 * @csspart tooltip__arrow - The arrow of the tooltip
 * @csspart tooltip__popup - The popup of the tooltip
 * @csspart tooltip__body - The body of the tooltip
 *
 * @cssproperty --thumb-size - The size of a thumb.
 * @cssproperty --thumb-hit-area-size - The clickable area around the thumb.
 * Per default this is set to 140% of the thumb size. Must be a scale css value (defaults to 1.4).
 * @cssproperty --track-hit-area-size - The clickable area around the track (top and left).
 * @cssproperty --track-color-active - Color of the track representing the current value.
 * @cssproperty --track-color-inactive - Color of the track that represents the remaining value.
 * @cssproperty --track-height - The height of the track.
 * @cssproperty --track-active-offset - The point of origin of the active track,
 * starting at the left side of the range.
 */
export const SynRange = createComponent({
  displayName: 'SynRange',
  elementClass: Component,
  events: {
    onSynBlur: 'syn-blur' as EventName<SynBlurEvent>,
    onSynChange: 'syn-change' as EventName<SynChangeEvent>,
    onSynFocus: 'syn-focus' as EventName<SynFocusEvent>,
    onSynInput: 'syn-input' as EventName<SynInputEvent>,
    onSynInvalid: 'syn-invalid' as EventName<SynInvalidEvent>,
    onSynMove: 'syn-move' as EventName<SynMoveEvent>,
  },
  react: React,
  tagName,
});

export type { SynBlurEvent } from '@synergy-design-system/components';
export type { SynChangeEvent } from '@synergy-design-system/components';
export type { SynFocusEvent } from '@synergy-design-system/components';
export type { SynInputEvent } from '@synergy-design-system/components';
export type { SynInvalidEvent } from '@synergy-design-system/components';
export type { SynMoveEvent } from '@synergy-design-system/components';
