// ---------------------------------------------------------------------
// 🔒 AUTOGENERATED @synergy-design-system/angular wrappers for @synergy-design-system/components
// Please do not edit this file directly!
// It will get recreated when running pnpm build.
// ---------------------------------------------------------------------
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  Output,
} from '@angular/core';
import type {
  SynAfterHideEvent, SynAfterShowEvent, SynBlurEvent, SynChangeEvent, SynClearEvent, SynFocusEvent, SynHideEvent, SynInputEvent, SynInvalidEvent, SynSelect, SynShowEvent,
} from '@synergy-design-system/components';
import '@synergy-design-system/components/components/select/select.js';

/**
 * @summary Selects allow you to choose items from a menu of predefined options.
 * @documentation https://synergy.style/components/select
 * @status stable
 * @since 2.0
 *
 * @dependency syn-icon
 * @dependency syn-popup
 * @dependency syn-tag
 *
 * @slot - The listbox options. Must be `<syn-option>` elements. You can use `<syn-divider>` to group items visually.
 * @slot label - The input's label. Alternatively, you can use the `label` attribute.
 * @slot prefix - Used to prepend a presentational icon or similar element to the combobox.
 * @slot clear-icon - An icon to use in lieu of the default clear icon.
 * @slot expand-icon - The icon to show when the control is expanded and collapsed. Rotates on open and close.
 * @slot help-text - Text that describes how to use the input. Alternatively, you can use the `help-text` attribute.
 *
 * @event syn-change - Emitted when the control's value changes.
 * @event syn-clear - Emitted when the control's value is cleared.
 * @event syn-input - Emitted when the control receives input.
 * @event syn-focus - Emitted when the control gains focus.
 * @event syn-blur - Emitted when the control loses focus.
 * @event syn-show - Emitted when the select's menu opens.
 * @event syn-after-show - Emitted after the select's menu opens and all animations are complete.
 * @event syn-hide - Emitted when the select's menu closes.
 * @event syn-after-hide - Emitted after the select's menu closes and all animations are complete.
 * @event syn-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
 *
 * @csspart form-control - The form control that wraps the label, input, and help text.
 * @csspart form-control-label - The label's wrapper.
 * @csspart form-control-input - The select's wrapper.
 * @csspart form-control-help-text - The help text's wrapper.
 * @csspart combobox - The container the wraps the prefix, combobox, clear icon, and expand button.
 * @csspart prefix - The container that wraps the prefix slot.
 * @csspart display-input - The element that displays the selected option's label, an `<input>` element.
 * @csspart listbox - The listbox container where options are slotted.
 * @csspart tags - The container that houses option tags when `multiselect` is used.
 * @csspart tag - The individual tags that represent each multiselect option.
 * @csspart tag__base - The tag's base part.
 * @csspart tag__content - The tag's content part.
 * @csspart tag__remove-button - The tag's remove button.
 * @csspart tag__remove-button__base - The tag's remove button base part.
 * @csspart clear-button - The clear button.
 * @csspart expand-icon - The container that wraps the expand icon.
 */
@Component({
  selector: 'syn-select',
  standalone: true,
  template: '<ng-content></ng-content>',
})
export class SynSelectComponent {
  private _el: SynSelect;

  private _ngZone: NgZone;

  constructor(e: ElementRef, ngZone: NgZone) {
    this._el = e.nativeElement;
    this._ngZone = ngZone;
    this._el.addEventListener('syn-change', (e: SynChangeEvent) => { this.synChangeEvent.emit(e); });
    this._el.addEventListener('syn-clear', (e: SynClearEvent) => { this.synClearEvent.emit(e); });
    this._el.addEventListener('syn-input', (e: SynInputEvent) => { this.synInputEvent.emit(e); });
    this._el.addEventListener('syn-focus', (e: SynFocusEvent) => { this.synFocusEvent.emit(e); });
    this._el.addEventListener('syn-blur', (e: SynBlurEvent) => { this.synBlurEvent.emit(e); });
    this._el.addEventListener('syn-show', (e: SynShowEvent) => { this.synShowEvent.emit(e); });
    this._el.addEventListener('syn-after-show', (e: SynAfterShowEvent) => { this.synAfterShowEvent.emit(e); });
    this._el.addEventListener('syn-hide', (e: SynHideEvent) => { this.synHideEvent.emit(e); });
    this._el.addEventListener('syn-after-hide', (e: SynAfterHideEvent) => { this.synAfterHideEvent.emit(e); });
    this._el.addEventListener('syn-invalid', (e: SynInvalidEvent) => { this.synInvalidEvent.emit(e); });
  }

  /**
* The name of the select, submitted as a name/value pair with form data.
 */
  @Input()
  set name(v: SynSelect['name']) {
    this._ngZone.runOutsideAngular(() => (this._el.name = v));
  }

  get name() {
    return this._el.name;
  }

  /**
* The current value of the select, submitted as a name/value pair with form data.
* When `multiple` is enabled, the
value attribute will be a space-delimited list of values based on the options selected, and the value property will
be an array.
* **For this reason, values must not contain spaces.**
 */
  @Input()
  set value(v: SynSelect['value']) {
    this._ngZone.runOutsideAngular(() => (this._el.value = v));
  }

  get value() {
    return this._el.value;
  }

  /**
* The select's size.
 */
  @Input()
  set size(v: SynSelect['size']) {
    this._ngZone.runOutsideAngular(() => (this._el.size = v));
  }

  get size() {
    return this._el.size;
  }

  /**
* Placeholder text to show as a hint when the select is empty.
 */
  @Input()
  set placeholder(v: SynSelect['placeholder']) {
    this._ngZone.runOutsideAngular(() => (this._el.placeholder = v));
  }

  get placeholder() {
    return this._el.placeholder;
  }

  /**
* Allows more than one option to be selected.
 */
  @Input()
  set multiple(v: SynSelect['multiple']) {
    this._ngZone.runOutsideAngular(() => (this._el.multiple = v));
  }

  get multiple() {
    return this._el.multiple;
  }

  /**
* The maximum number of selected options to show when `multiple` is true.
* After the maximum, "+n" will be shown to
indicate the number of additional items that are selected.
* Set to 0 to remove the limit.
 */
  @Input()
  set maxOptionsVisible(v: SynSelect['maxOptionsVisible']) {
    this._ngZone.runOutsideAngular(() => (this._el.maxOptionsVisible = v));
  }

  get maxOptionsVisible() {
    return this._el.maxOptionsVisible;
  }

  /**
* Disables the select control.
 */
  @Input()
  set disabled(v: SynSelect['disabled']) {
    this._ngZone.runOutsideAngular(() => (this._el.disabled = v));
  }

  get disabled() {
    return this._el.disabled;
  }

  /**
* Adds a clear button when the select is not empty.
 */
  @Input()
  set clearable(v: SynSelect['clearable']) {
    this._ngZone.runOutsideAngular(() => (this._el.clearable = v));
  }

  get clearable() {
    return this._el.clearable;
  }

  /**
* Indicates whether or not the select is open.
* You can toggle this attribute to show and hide the menu, or you can
use the `show()` and `hide()` methods and this attribute will reflect the select's open state.
 */
  @Input()
  set open(v: SynSelect['open']) {
    this._ngZone.runOutsideAngular(() => (this._el.open = v));
  }

  get open() {
    return this._el.open;
  }

  /**
* Enable this option to prevent the listbox from being clipped when the component is placed inside a container with
`overflow: auto|scroll`.
* Hoisting uses a fixed positioning strategy that works in many, but not all, scenarios.
 */
  @Input()
  set hoist(v: SynSelect['hoist']) {
    this._ngZone.runOutsideAngular(() => (this._el.hoist = v));
  }

  get hoist() {
    return this._el.hoist;
  }

  /**
* The select's label.
* If you need to display HTML, use the `label` slot instead.
 */
  @Input()
  set label(v: SynSelect['label']) {
    this._ngZone.runOutsideAngular(() => (this._el.label = v));
  }

  get label() {
    return this._el.label;
  }

  /**
* The preferred placement of the select's menu.
* Note that the actual placement may vary as needed to keep the listbox
inside of the viewport.
 */
  @Input()
  set placement(v: SynSelect['placement']) {
    this._ngZone.runOutsideAngular(() => (this._el.placement = v));
  }

  get placement() {
    return this._el.placement;
  }

  /**
* The select's help text.
* If you need to display HTML, use the `help-text` slot instead.
 */
  @Input()
  set helpText(v: SynSelect['helpText']) {
    this._ngZone.runOutsideAngular(() => (this._el.helpText = v));
  }

  get helpText() {
    return this._el.helpText;
  }

  /**
* By default, form controls are associated with the nearest containing `<form>` element.
* This attribute allows you
to place the form control outside of a form and associate it with the form that has this `id`.
* The form must be in
the same document or shadow root for this to work.
 */
  @Input()
  set form(v: SynSelect['form']) {
    this._ngZone.runOutsideAngular(() => (this._el.form = v));
  }

  get form() {
    return this._el.form;
  }

  /**
* The select's required attribute.
 */
  @Input()
  set required(v: SynSelect['required']) {
    this._ngZone.runOutsideAngular(() => (this._el.required = v));
  }

  get required() {
    return this._el.required;
  }

  /**
* A function that customizes the tags to be rendered when multiple=true.
* The first argument is the option, the second
is the current tag's index.
* The function should return either a Lit TemplateResult or a string containing trusted HTML of the symbol to render at
the specified value.
 */
  @Input()
  set getTag(v: SynSelect['getTag']) {
    this._ngZone.runOutsideAngular(() => (this._el.getTag = v));
  }

  get getTag() {
    return this._el.getTag;
  }

  @Input()
  callHandleDisabledChange(...args: Parameters<SynSelect['handleDisabledChange']>) {
    return this._ngZone.runOutsideAngular(() => this._el.handleDisabledChange(...args));
  }

  @Input()
  callHandleValueChange(...args: Parameters<SynSelect['handleValueChange']>) {
    return this._ngZone.runOutsideAngular(() => this._el.handleValueChange(...args));
  }

  @Input()
  callHandleOpenChange(...args: Parameters<SynSelect['handleOpenChange']>) {
    return this._ngZone.runOutsideAngular(() => this._el.handleOpenChange(...args));
  }

  /**
* Shows the listbox.
 */
  @Input()
  callShow(...args: Parameters<SynSelect['show']>) {
    return this._ngZone.runOutsideAngular(() => this._el.show(...args));
  }

  /**
* Hides the listbox.
 */
  @Input()
  callHide(...args: Parameters<SynSelect['hide']>) {
    return this._ngZone.runOutsideAngular(() => this._el.hide(...args));
  }

  /**
* Checks for validity but does not show a validation message.
* Returns `true` when valid and `false` when invalid.
 */
  @Input()
  callCheckValidity(...args: Parameters<SynSelect['checkValidity']>) {
    return this._ngZone.runOutsideAngular(() => this._el.checkValidity(...args));
  }

  /**
* Gets the associated form, if one exists.
 */
  @Input()
  callGetForm(...args: Parameters<SynSelect['getForm']>) {
    return this._ngZone.runOutsideAngular(() => this._el.getForm(...args));
  }

  /**
* Checks for validity and shows the browser's validation message if the control is invalid.
 */
  @Input()
  callReportValidity(...args: Parameters<SynSelect['reportValidity']>) {
    return this._ngZone.runOutsideAngular(() => this._el.reportValidity(...args));
  }

  /**
* Sets a custom validation message.
* Pass an empty string to restore validity.
 */
  @Input()
  callSetCustomValidity(...args: Parameters<SynSelect['setCustomValidity']>) {
    return this._ngZone.runOutsideAngular(() => this._el.setCustomValidity(...args));
  }

  /**
* Sets focus on the control.
 */
  @Input()
  callFocus(...args: Parameters<SynSelect['focus']>) {
    return this._ngZone.runOutsideAngular(() => this._el.focus(...args));
  }

  /**
* Removes focus from the control.
 */
  @Input()
  callBlur(...args: Parameters<SynSelect['blur']>) {
    return this._ngZone.runOutsideAngular(() => this._el.blur(...args));
  }

  /**
* Emitted when the control's value changes.
 */
  @Output() synChangeEvent = new EventEmitter<SynChangeEvent>();

  /**
* Emitted when the control's value is cleared.
 */
  @Output() synClearEvent = new EventEmitter<SynClearEvent>();

  /**
* Emitted when the control receives input.
 */
  @Output() synInputEvent = new EventEmitter<SynInputEvent>();

  /**
* Emitted when the control gains focus.
 */
  @Output() synFocusEvent = new EventEmitter<SynFocusEvent>();

  /**
* Emitted when the control loses focus.
 */
  @Output() synBlurEvent = new EventEmitter<SynBlurEvent>();

  /**
* Emitted when the select's menu opens.
 */
  @Output() synShowEvent = new EventEmitter<SynShowEvent>();

  /**
* Emitted after the select's menu opens and all animations are complete.
 */
  @Output() synAfterShowEvent = new EventEmitter<SynAfterShowEvent>();

  /**
* Emitted when the select's menu closes.
 */
  @Output() synHideEvent = new EventEmitter<SynHideEvent>();

  /**
* Emitted after the select's menu closes and all animations are complete.
 */
  @Output() synAfterHideEvent = new EventEmitter<SynAfterHideEvent>();

  /**
* Emitted when the form control has been checked for validity and its constraints aren't satisfied.
 */
  @Output() synInvalidEvent = new EventEmitter<SynInvalidEvent>();
}

export type { SynChangeEvent } from '@synergy-design-system/components';
export type { SynClearEvent } from '@synergy-design-system/components';
export type { SynInputEvent } from '@synergy-design-system/components';
export type { SynFocusEvent } from '@synergy-design-system/components';
export type { SynBlurEvent } from '@synergy-design-system/components';
export type { SynShowEvent } from '@synergy-design-system/components';
export type { SynAfterShowEvent } from '@synergy-design-system/components';
export type { SynHideEvent } from '@synergy-design-system/components';
export type { SynAfterHideEvent } from '@synergy-design-system/components';
export type { SynInvalidEvent } from '@synergy-design-system/components';
