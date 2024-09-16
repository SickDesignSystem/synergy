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
import type { SynButtonGroup } from '@synergy-design-system/components';

import '@synergy-design-system/components/components/button-group/button-group.js';

/**
 * @summary Button groups can be used to group related buttons into sections.
 * @documentation https://synergy.style/components/button-group
 * @status stable
 * @since 2.0
 *
 * @slot - One or more `<syn-button>` elements to display in the button group.
 *
 * @csspart base - The component's base wrapper.
 */
@Component({
  selector: 'syn-button-group',
  standalone: true,
  template: '<ng-content></ng-content>',
})
export class SynButtonGroupComponent {
  public nativeElement: SynButtonGroup;
  private _ngZone: NgZone;

  constructor(e: ElementRef, ngZone: NgZone) {
    this.nativeElement = e.nativeElement;
    this._ngZone = ngZone;
  }

  /**
* A label to use for the button group.
* This won't be displayed on the screen, but it will be announced by assistive
devices when interacting with the control and is strongly recommended.
 */
  @Input()
  set label(v: SynButtonGroup['label']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.label = v));
  }
  get label() {
    return this.nativeElement.label;
  }
}
