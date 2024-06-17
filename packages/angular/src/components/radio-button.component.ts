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
import type { SynBlurEvent, SynFocusEvent, SynRadioButton } from '@synergy-design-system/components';
import '@synergy-design-system/components/components/radio-button/radio-button.js';

/**
 * @summary Radios buttons allow the user to select a single option from a group using a button-like control.
 * @documentation https://synergy.style/components/radio-button
 * @status stable
 * @since 2.0
 *
 * @slot - The radio button's label.
 * @slot prefix - A presentational prefix icon or similar element.
 * @slot suffix - A presentational suffix icon or similar element.
 *
 * @event syn-blur - Emitted when the button loses focus.
 * @event syn-focus - Emitted when the button gains focus.
 *
 * @csspart base - The component's base wrapper.
 * @csspart button - The internal `<button>` element.
 * @csspart button--checked - The internal button element when the radio button is checked.
 * @csspart prefix - The container that wraps the prefix.
 * @csspart label - The container that wraps the radio button's label.
 * @csspart suffix - The container that wraps the suffix.
 */
@Component({
  selector: 'syn-radio-button',
  standalone: true,
  template: '<ng-content></ng-content>',
})
export class SynRadioButtonComponent {
  public nativeElement: SynRadioButton;

  private _ngZone: NgZone;

  constructor(e: ElementRef, ngZone: NgZone) {
    this.nativeElement = e.nativeElement;
    this._ngZone = ngZone;
    this.nativeElement.addEventListener('syn-blur', (e: SynBlurEvent) => { this.synBlurEvent.emit(e); });
    this.nativeElement.addEventListener('syn-focus', (e: SynFocusEvent) => { this.synFocusEvent.emit(e); });
  }

  /**
* The radio's value.
* When selected, the radio group will receive this value.
 */
  @Input()
  set value(v: SynRadioButton['value']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.value = v));
  }

  get value() {
    return this.nativeElement.value;
  }

  /**
* Disables the radio button.
 */
  @Input()
  set disabled(v: SynRadioButton['disabled']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.disabled = v));
  }

  get disabled() {
    return this.nativeElement.disabled;
  }

  /**
* The radio button's size.
* When used inside a radio group, the size will be determined by the radio group's size so
this attribute can typically be omitted.
 */
  @Input()
  set size(v: SynRadioButton['size']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.size = v));
  }

  get size() {
    return this.nativeElement.size;
  }

  /**
* Draws a pill-style radio button with rounded edges.
 */
  @Input()
  set pill(v: SynRadioButton['pill']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.pill = v));
  }

  get pill() {
    return this.nativeElement.pill;
  }

  /**
* Emitted when the button loses focus.
 */
  @Output() synBlurEvent = new EventEmitter<SynBlurEvent>();

  /**
* Emitted when the button gains focus.
 */
  @Output() synFocusEvent = new EventEmitter<SynFocusEvent>();
}

export type { SynBlurEvent } from '@synergy-design-system/components';
export type { SynFocusEvent } from '@synergy-design-system/components';