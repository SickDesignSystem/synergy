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
import type { SynOptgroup } from '@synergy-design-system/components';

import '@synergy-design-system/components/components/optgroup/optgroup.js';

/**
 * @summary The <syn-optgroup> element creates a grouping for <syn-option>s within a <syn-select>.
 * @documentation https://synergy-design-system.github.io/?path=/docs/components-syn-optgroup--docs
 * @status stable
 * @since 1.3.0
 *
 * @dependency syn-divider
 *
 * @slot - The given options. Must be `<syn-option>` elements.
 * @slot prefix - A presentational prefix icon or similar element.
 * @slot label - The label for the optgroup
 * @slot suffix - A presentational suffix icon or similar element.
 *
 * @csspart base - The component's base wrapper.
 * @csspart label-container - The container that wraps prefix, label and base
 * @csspart divider - The divider that is displayed above the content
 * @csspart prefix - The container that wraps the prefix.
 * @csspart suffix - The container that wraps the suffix.
 * @csspart options - The container that wraps the <syn-option> elements.
 *
 * @cssproperty --display-divider - Display property of the divider. Defaults to "block"
 */
@Component({
  selector: 'syn-optgroup',
  standalone: true,
  template: '<ng-content></ng-content>',
})
export class SynOptgroupComponent {
  public nativeElement: SynOptgroup;

  private _ngZone: NgZone;

  constructor(e: ElementRef, ngZone: NgZone) {
    this.nativeElement = e.nativeElement;
    this._ngZone = ngZone;
  }

  /**
* Disables all options in the optgroup.
 */
  @Input()
  set disabled(v: SynOptgroup['disabled']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.disabled = v));
  }

  get disabled() {
    return this.nativeElement.disabled;
  }

  /**
* The optgroups label.
* If you need to display HTML, use the `label` slot instead.
 */
  @Input()
  set label(v: SynOptgroup['label']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.label = v));
  }

  get label() {
    return this.nativeElement.label;
  }

  @Input()
  callHandleDisabledChange(...args: Parameters<SynOptgroup['handleDisabledChange']>) {
    return this._ngZone.runOutsideAngular(() => this.nativeElement.handleDisabledChange(...args));
  }
}
