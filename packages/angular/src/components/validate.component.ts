// ---------------------------------------------------------------------
// 🔒 AUTOGENERATED @synergy-design-system/angular wrappers for @synergy-design-system/components
// Please do not edit this file directly!
// It will get recreated when running pnpm build.
// ---------------------------------------------------------------------
import {
  Component,
  ElementRef,
  NgZone,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import type { SynValidate } from '@synergy-design-system/components';

import '@synergy-design-system/components/components/validate/validate.js';

/**
 * @summary Validate provides form field validation messages in a unified way.
 * It does this by using [the native browser validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
 * and showing the validation message in a consistent, user defined way.
 *
 * @dependency syn-alert
 *
 * @slot - The form field that should be validated.
 * Avoid slotting in more than one element, as subsequent ones will be ignored.
 *
 * @csspart base - The component's base wrapper.
 * @csspart input-wrapper - The container that wraps the form field.
 * @csspart alert - The syn-alert that is shown when the variant is set to "inline".
 * @csspart alert__base - The container that wraps the alert.
 * @csspart alert__message - The container that wraps the alert message.
 * @csspart alert__icon - The container that wraps the alert icon.
 */
@Component({
  selector: 'syn-validate',
  standalone: true,
  template: '<ng-content></ng-content>',
})
export class SynValidateComponent {
  public nativeElement: SynValidate;
  private _ngZone: NgZone;

  constructor(e: ElementRef, ngZone: NgZone) {
    this.nativeElement = e.nativeElement;
    this._ngZone = ngZone;
  }

  /**
* The variant that should be used to show validation alerts.

The following variants are supported:
- **native** (default): Uses the native browser validation, usually a browser tooltip.
- **inline**: Show the validation message underneath the element, using a `<syn-alert>`
 */
  @Input()
  set variant(v: SynValidate['variant']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.variant = v));
  }
  get variant(): SynValidate['variant'] {
    return this.nativeElement.variant;
  }

  /**
   * Do not show the error icon when using the inline variant validation
   */
  @Input()
  set hideIcon(v: '' | SynValidate['hideIcon']) {
    this._ngZone.runOutsideAngular(
      () => (this.nativeElement.hideIcon = v === '' || v),
    );
  }
  get hideIcon(): SynValidate['hideIcon'] {
    return this.nativeElement.hideIcon;
  }

  /**
* Defines the events that trigger the validation.
`invalid` will always automatically be included.
You may also use the `live` keyword to validate on every input change.
`live` will make sure to listen to the `invalid`, `input` and `blur` events.

Please have a look at the [documentation for native form validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
and [the use of form invalid events](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/invalid_event) for further information.
 */
  @Input()
  set on(v: SynValidate['on']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.on = v));
  }
  get on(): SynValidate['on'] {
    return this.nativeElement.on;
  }

  /**
* Custom validation message to be displayed when the input is invalid.
Will override the default browser validation message.
Set to an empty string to reset the validation message.
 */
  @Input()
  set customValidationMessage(v: SynValidate['customValidationMessage']) {
    this._ngZone.runOutsideAngular(
      () => (this.nativeElement.customValidationMessage = v),
    );
  }
  get customValidationMessage(): SynValidate['customValidationMessage'] {
    return this.nativeElement.customValidationMessage;
  }

  /**
* Set this to true to validate the input immediately when it is rendered.
Best used with a `variant` of `inline`.
When setting eager, the input will not be focused automatically.

When using a `variant` of `native` the browser will focus
the last eager field as it is using a tooltip.
In this case it is better to just provide one eager field.
 */
  @Input()
  set eager(v: '' | SynValidate['eager']) {
    this._ngZone.runOutsideAngular(
      () => (this.nativeElement.eager = v === '' || v),
    );
  }
  get eager(): SynValidate['eager'] {
    return this.nativeElement.eager;
  }
}
