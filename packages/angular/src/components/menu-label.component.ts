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
import type { SynMenuLabel } from '@synergy-design-system/components';

import '@synergy-design-system/components/components/menu-label/menu-label.js';

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
@Component({
  selector: 'syn-menu-label',
  standalone: true,
  template: '<ng-content></ng-content>',
})
export class SynMenuLabelComponent {
  private _el: SynMenuLabel;

  private _ngZone: NgZone;

  constructor(e: ElementRef, ngZone: NgZone) {
    this._el = e.nativeElement;
    this._ngZone = ngZone;
  }
}
