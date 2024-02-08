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
  SynBlurEvent, SynButton, SynFocusEvent, SynInvalidEvent,
} from '@synergy-design-system/components';
import '@synergy-design-system/components/components/button/button.js';

/**
 * @summary Buttons represent actions that are available to the user.
 * @documentation https://synergy.style/components/button
 * @status stable
 * @since 2.0
 *
 * @dependency syn-icon
 * @dependency syn-spinner
 *
 * @event syn-blur - Emitted when the button loses focus.
 * @event syn-focus - Emitted when the button gains focus.
 * @event syn-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
 *
 * @slot - The button's label.
 * @slot prefix - A presentational prefix icon or similar element.
 * @slot suffix - A presentational suffix icon or similar element.
 *
 * @csspart base - The component's base wrapper.
 * @csspart prefix - The container that wraps the prefix.
 * @csspart label - The button's label.
 * @csspart suffix - The container that wraps the suffix.
 * @csspart caret - The button's caret icon, an `<syn-icon>` element.
 * @csspart spinner - The spinner that shows when the button is in the loading state.
 */
@Component({
  selector: 'syn-button',
  standalone: true,
  template: '<ng-content></ng-content>',
})
export class SynButtonComponent {
  private _el: SynButton;

  private _ngZone: NgZone;

  constructor(e: ElementRef, ngZone: NgZone) {
    this._el = e.nativeElement;
    this._ngZone = ngZone;
    this._el.addEventListener('syn-blur', (e: SynBlurEvent) => { this.synBlurEvent.emit(e); });
    this._el.addEventListener('syn-focus', (e: SynFocusEvent) => { this.synFocusEvent.emit(e); });
    this._el.addEventListener('syn-invalid', (e: SynInvalidEvent) => { this.synInvalidEvent.emit(e); });
  }

  @Input()
  set title(v: SynButton['title']) {
    this._ngZone.runOutsideAngular(() => (this._el.title = v));
  }

  get title() {
    return this._el.title;
  }

  /**
* The button's theme variant.
 */
  @Input()
  set variant(v: SynButton['variant']) {
    this._ngZone.runOutsideAngular(() => (this._el.variant = v));
  }

  get variant() {
    return this._el.variant;
  }

  /**
* The button's size.
 */
  @Input()
  set size(v: SynButton['size']) {
    this._ngZone.runOutsideAngular(() => (this._el.size = v));
  }

  get size() {
    return this._el.size;
  }

  /**
* Draws the button with a caret.
* Used to indicate that the button triggers a dropdown menu or similar behavior.
 */
  @Input()
  set caret(v: SynButton['caret']) {
    this._ngZone.runOutsideAngular(() => (this._el.caret = v));
  }

  get caret() {
    return this._el.caret;
  }

  /**
* Disables the button.
 */
  @Input()
  set disabled(v: SynButton['disabled']) {
    this._ngZone.runOutsideAngular(() => (this._el.disabled = v));
  }

  get disabled() {
    return this._el.disabled;
  }

  /**
* Draws the button in a loading state.
 */
  @Input()
  set loading(v: SynButton['loading']) {
    this._ngZone.runOutsideAngular(() => (this._el.loading = v));
  }

  get loading() {
    return this._el.loading;
  }

  /**
* The type of button.
* Note that the default value is `button` instead of `submit`, which is opposite of how native
`<button>` elements behave.
* When the type is `submit`, the button will submit the surrounding form.
 */
  @Input()
  set type(v: SynButton['type']) {
    this._ngZone.runOutsideAngular(() => (this._el.type = v));
  }

  get type() {
    return this._el.type;
  }

  /**
* The name of the button, submitted as a name/value pair with form data, but only when this button is the submitter.
This attribute is ignored when `href` is present.
 */
  @Input()
  set name(v: SynButton['name']) {
    this._ngZone.runOutsideAngular(() => (this._el.name = v));
  }

  get name() {
    return this._el.name;
  }

  /**
* The value of the button, submitted as a pair with the button's name as part of the form data, but only when this
button is the submitter.
* This attribute is ignored when `href` is present.
 */
  @Input()
  set value(v: SynButton['value']) {
    this._ngZone.runOutsideAngular(() => (this._el.value = v));
  }

  get value() {
    return this._el.value;
  }

  /**
* When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`.
 */
  @Input()
  set href(v: SynButton['href']) {
    this._ngZone.runOutsideAngular(() => (this._el.href = v));
  }

  get href() {
    return this._el.href;
  }

  /**
* Tells the browser where to open the link.
* Only used when `href` is present.
 */
  @Input()
  set target(v: SynButton['target']) {
    this._ngZone.runOutsideAngular(() => (this._el.target = v));
  }

  get target() {
    return this._el.target;
  }

  /**
* When using `href`, this attribute will map to the underlying link's `rel` attribute.
* Unlike regular links, the
default is `noreferrer noopener` to prevent security exploits.
* However, if you're using `target` to point to a
specific tab/window, this will prevent that from working correctly.
* You can remove or change the default value by
setting the attribute to an empty string or a value of your choice, respectively.
 */
  @Input()
  set rel(v: SynButton['rel']) {
    this._ngZone.runOutsideAngular(() => (this._el.rel = v));
  }

  get rel() {
    return this._el.rel;
  }

  /**
* Tells the browser to download the linked file as this filename.
* Only used when `href` is present.
 */
  @Input()
  set download(v: SynButton['download']) {
    this._ngZone.runOutsideAngular(() => (this._el.download = v));
  }

  get download() {
    return this._el.download;
  }

  /**
* The "form owner" to associate the button with.
* If omitted, the closest containing form will be used instead.
* The
value of this attribute must be an id of a form in the same document or shadow root as the button.
 */
  @Input()
  set form(v: SynButton['form']) {
    this._ngZone.runOutsideAngular(() => (this._el.form = v));
  }

  get form() {
    return this._el.form;
  }

  /**
* Used to override the form owner's `action` attribute.
 */
  @Input()
  set formAction(v: SynButton['formAction']) {
    this._ngZone.runOutsideAngular(() => (this._el.formAction = v));
  }

  get formAction() {
    return this._el.formAction;
  }

  /**
* Used to override the form owner's `enctype` attribute.
 */
  @Input()
  set formEnctype(v: SynButton['formEnctype']) {
    this._ngZone.runOutsideAngular(() => (this._el.formEnctype = v));
  }

  get formEnctype() {
    return this._el.formEnctype;
  }

  /**
* Used to override the form owner's `method` attribute.
 */
  @Input()
  set formMethod(v: SynButton['formMethod']) {
    this._ngZone.runOutsideAngular(() => (this._el.formMethod = v));
  }

  get formMethod() {
    return this._el.formMethod;
  }

  /**
* Used to override the form owner's `novalidate` attribute.
 */
  @Input()
  set formNoValidate(v: SynButton['formNoValidate']) {
    this._ngZone.runOutsideAngular(() => (this._el.formNoValidate = v));
  }

  get formNoValidate() {
    return this._el.formNoValidate;
  }

  /**
* Used to override the form owner's `target` attribute.
 */
  @Input()
  set formTarget(v: SynButton['formTarget']) {
    this._ngZone.runOutsideAngular(() => (this._el.formTarget = v));
  }

  get formTarget() {
    return this._el.formTarget;
  }

  @Input()
  callHandleDisabledChange(...args: Parameters<SynButton['handleDisabledChange']>) {
    return this._ngZone.runOutsideAngular(() => this._el.handleDisabledChange(...args));
  }

  /**
* Simulates a click on the button.
 */
  @Input()
  callClick(...args: Parameters<SynButton['click']>) {
    return this._ngZone.runOutsideAngular(() => this._el.click(...args));
  }

  /**
* Sets focus on the button.
 */
  @Input()
  callFocus(...args: Parameters<SynButton['focus']>) {
    return this._ngZone.runOutsideAngular(() => this._el.focus(...args));
  }

  /**
* Removes focus from the button.
 */
  @Input()
  callBlur(...args: Parameters<SynButton['blur']>) {
    return this._ngZone.runOutsideAngular(() => this._el.blur(...args));
  }

  /**
* Checks for validity but does not show a validation message.
* Returns `true` when valid and `false` when invalid.
 */
  @Input()
  callCheckValidity(...args: Parameters<SynButton['checkValidity']>) {
    return this._ngZone.runOutsideAngular(() => this._el.checkValidity(...args));
  }

  /**
* Gets the associated form, if one exists.
 */
  @Input()
  callGetForm(...args: Parameters<SynButton['getForm']>) {
    return this._ngZone.runOutsideAngular(() => this._el.getForm(...args));
  }

  /**
* Checks for validity and shows the browser's validation message if the control is invalid.
 */
  @Input()
  callReportValidity(...args: Parameters<SynButton['reportValidity']>) {
    return this._ngZone.runOutsideAngular(() => this._el.reportValidity(...args));
  }

  /**
* Sets a custom validation message.
* Pass an empty string to restore validity.
 */
  @Input()
  callSetCustomValidity(...args: Parameters<SynButton['setCustomValidity']>) {
    return this._ngZone.runOutsideAngular(() => this._el.setCustomValidity(...args));
  }

  /**
* Emitted when the button loses focus.
 */
  @Output() synBlurEvent = new EventEmitter<SynBlurEvent>();

  /**
* Emitted when the button gains focus.
 */
  @Output() synFocusEvent = new EventEmitter<SynFocusEvent>();

  /**
* Emitted when the form control has been checked for validity and its constraints aren't satisfied.
 */
  @Output() synInvalidEvent = new EventEmitter<SynInvalidEvent>();
}

export type { SynBlurEvent } from '@synergy-design-system/components';
export type { SynFocusEvent } from '@synergy-design-system/components';
export type { SynInvalidEvent } from '@synergy-design-system/components';
