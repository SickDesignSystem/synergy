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
  SynBlurEvent, SynChangeEvent, SynErrorEvent, SynFile, SynFocusEvent, SynInputEvent,
} from '@synergy-design-system/components';
import '@synergy-design-system/components/components/file/file.js';

/**
 * @summary File controls allow selecting an arbitrary number of files for uploading.
 * @status stable
 *
 * @dependency syn-button
 * @dependency syn-icon
 *
 * @slot label - The file control's label. Alternatively, you can use the `label` attribute.
 * @slot help-text - Text that describes how to use the file control.
 *    Alternatively, you can use the `help-text` attribute.
 * @slot droparea-icon - Optional droparea icon to use instead of the default.
 *    Works best with `<syn-icon>`.
 * @slot trigger - Optional content to be used as trigger instead of the default content.
 *    Opening the file dialog on click and as well as drag and drop will work for this content.
 *    Following attributes will no longer work: *label*, *droparea*, *help-text*, *size*,
 *    *hide-value*. Also if using the disabled attribute, the disabled styling will not be
 *    applied and must be taken care of yourself.
 *
 * @event syn-blur - Emitted when the control loses focus.
 * @event syn-change - Emitted when an alteration to the control's value is committed by the user.
 * @event syn-error - Emitted when multiple files are selected via drag and drop, without
 * the `multiple` property being set.
 * @event syn-focus - Emitted when the control gains focus.
 * @event syn-input - Emitted when the control receives input.
 *
 * @csspart form-control - The form control that wraps the label, input, and help text.
 * @csspart form-control-label - The label's wrapper.
 * @csspart form-control-input - The input's wrapper.
 * @csspart form-control-help-text - The help text's wrapper.
 * @csspart button-wrapper - The wrapper around the button and text value.
 * @csspart button - The syn-button acting as a file input.
 * @csspart value - The chosen files or placeholder text for the file input.
 * @csspart droparea - The element wrapping the drop zone.
 * @csspart droparea-background - The background of the drop zone.
 * @csspart droparea-icon - The container that wraps the icon for the drop zone.
 * @csspart droparea-value - The text for the drop zone.
 * @csspart trigger - The container that wraps the trigger.
 *
 * @animation file.iconDrop - The animation to use for the file icon
 * when a file is dropped
 * @animation file.text.disappear - The disappear animation to use for the file placeholder text
 * when a file is dropped
 * @animation file.text.appear - The appear animation to use for the file placeholder text
 * when a file is dropped
 */
@Component({
  selector: 'syn-file',
  standalone: true,
  template: '<ng-content></ng-content>',
})
export class SynFileComponent {
  public nativeElement: SynFile;

  private _ngZone: NgZone;

  constructor(e: ElementRef, ngZone: NgZone) {
    this.nativeElement = e.nativeElement;
    this._ngZone = ngZone;
    this.nativeElement.addEventListener('syn-blur', (e: SynBlurEvent) => { this.synBlurEvent.emit(e); });
    this.nativeElement.addEventListener('syn-change', (e: SynChangeEvent) => { this.synChangeEvent.emit(e); });
    this.nativeElement.addEventListener('syn-error', (e: SynErrorEvent) => { this.synErrorEvent.emit(e); });
    this.nativeElement.addEventListener('syn-focus', (e: SynFocusEvent) => { this.synFocusEvent.emit(e); });
    this.nativeElement.addEventListener('syn-input', (e: SynInputEvent) => { this.synInputEvent.emit(e); this.filesChange.emit(this.files); });
  }

  /**
* The selected files as a FileList object containing a list of File objects.
The FileList behaves like an array, so you can get the number of selected files
via its length property.
[see MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#getting_information_on_selected_files)
 */
  @Input()
  set files(v: SynFile['files']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.files = v));
  }

  get files() {
    return this.nativeElement.files;
  }

  /**
* The name of the file control, submitted as a name/value pair with form data.
 */
  @Input()
  set name(v: SynFile['name']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.name = v));
  }

  get name() {
    return this.nativeElement.name;
  }

  /**
* The value of the file control contains a string that represents the path of the selected file.
If multiple files are selected, the value represents the first file in the list.
If no file is selected, the value is an empty string.
Beware that the only valid value when setting a file control is an empty string!
[see MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#value)
 */
  @Input()
  set value(v: SynFile['value']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.value = v));
  }

  get value() {
    return this.nativeElement.value;
  }

  /**
* The file control's size.
 */
  @Input()
  set size(v: SynFile['size']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.size = v));
  }

  get size() {
    return this.nativeElement.size;
  }

  /**
* The file control's label.
* If you need to display HTML, use the `label` slot instead.
 */
  @Input()
  set label(v: SynFile['label']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.label = v));
  }

  get label() {
    return this.nativeElement.label;
  }

  /**
* The file control's help text.
If you need to display HTML, use the `help-text` slot instead.
 */
  @Input()
  set helpText(v: SynFile['helpText']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.helpText = v));
  }

  get helpText() {
    return this.nativeElement.helpText;
  }

  /**
* Disables the file control.
 */
  @Input()
  set disabled(v: SynFile['disabled']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.disabled = v));
  }

  get disabled() {
    return this.nativeElement.disabled;
  }

  /**
* Draw the file control as a drop area
 */
  @Input()
  set droparea(v: SynFile['droparea']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.droparea = v));
  }

  get droparea() {
    return this.nativeElement.droparea;
  }

  /**
* Comma separated list of supported file types
[see MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept)
 */
  @Input()
  set accept(v: SynFile['accept']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.accept = v));
  }

  get accept() {
    return this.nativeElement.accept;
  }

  /**
* Specifies the types of files that the server accepts.
Can be set either to user or environment.
Works only when not using a droparea!
[see MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/capture)
 */
  @Input()
  set capture(v: SynFile['capture']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.capture = v));
  }

  get capture() {
    return this.nativeElement.capture;
  }

  /**
* Indicates whether the user can select more than one file.
[see MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#multiple)
 */
  @Input()
  set multiple(v: SynFile['multiple']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.multiple = v));
  }

  get multiple() {
    return this.nativeElement.multiple;
  }

  /**
* Indicates that the file control should let the user select directories instead of files.
When a directory is selected, the directory and its entire hierarchy of contents are included
in the set of selected items.
Note: This is a non-standard attribute but is supported in the major browsers.
[see MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/webkitdirectory)
 */
  @Input()
  set webkitdirectory(v: SynFile['webkitdirectory']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.webkitdirectory = v));
  }

  get webkitdirectory() {
    return this.nativeElement.webkitdirectory;
  }

  /**
* By default, form controls are associated with the nearest containing `<form>` element.
This attribute allows you to place the form control outside of a form and associate it
with the form that has this `id`.
* The form must be in the same document
or shadow root for this to work.
 */
  @Input()
  set form(v: SynFile['form']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.form = v));
  }

  get form() {
    return this.nativeElement.form;
  }

  /**
* Makes the input a required field.
 */
  @Input()
  set required(v: SynFile['required']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.required = v));
  }

  get required() {
    return this.nativeElement.required;
  }

  /**
* Suppress the value from being displayed in the file control
 */
  @Input()
  set hideValue(v: SynFile['hideValue']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.hideValue = v));
  }

  get hideValue() {
    return this.nativeElement.hideValue;
  }

  /**
* Emitted when the control loses focus.
 */
  @Output() synBlurEvent = new EventEmitter<SynBlurEvent>();

  /**
* Emitted when an alteration to the control's value is committed by the user.
 */
  @Output() synChangeEvent = new EventEmitter<SynChangeEvent>();

  /**
* Emitted when multiple files are selected via drag and drop, without the `multiple` property being set.
 */
  @Output() synErrorEvent = new EventEmitter<SynErrorEvent>();

  /**
* Emitted when the control gains focus.
 */
  @Output() synFocusEvent = new EventEmitter<SynFocusEvent>();

  /**
* Emitted when the control receives input.
 */
  @Output() synInputEvent = new EventEmitter<SynInputEvent>();

  /**
* Support for two way data binding
 */
  @Output() filesChange = new EventEmitter<SynFile['files']>();
}

export type { SynBlurEvent } from '@synergy-design-system/components';
export type { SynChangeEvent } from '@synergy-design-system/components';
export type { SynErrorEvent } from '@synergy-design-system/components';
export type { SynFocusEvent } from '@synergy-design-system/components';
export type { SynInputEvent } from '@synergy-design-system/components';
