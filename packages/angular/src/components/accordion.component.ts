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
import type { SynAccordion } from '@synergy-design-system/components';

import '@synergy-design-system/components/components/accordion/accordion.js';

/**
 * @summary Accordions provide the ability to group a list of `<syn-details>`.
 *
 * @documentation https://synergy-design-system.github.io/?path=/docs/components-syn-accordion--docs
 * @status stable
 * @since 1.23.0
 *
 * @slot - The accordion's main content. Must be `<syn-details />` elements.
 *
 * @csspart base - The component's base wrapper.
 */
@Component({
  selector: 'syn-accordion',
  standalone: true,
  template: '<ng-content></ng-content>',
})
export class SynAccordionComponent {
  public nativeElement: SynAccordion;

  private _ngZone: NgZone;

  constructor(e: ElementRef, ngZone: NgZone) {
    this.nativeElement = e.nativeElement;
    this._ngZone = ngZone;
  }

  /**
* Indicates whether or not multiple `<syn-detail>` elements can be open at the same time.
 */
  @Input()
  set closeOthers(v: SynAccordion['closeOthers']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.closeOthers = v));
  }

  get closeOthers() {
    return this.nativeElement.closeOthers;
  }

  /**
* Draws the accordion and the slotted `<syn-details>` as contained elements.
 */
  @Input()
  set contained(v: SynAccordion['contained']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.contained = v));
  }

  get contained() {
    return this.nativeElement.contained;
  }

  /**
* The size that should be applied to all slotted `<syn-details>` elements
 */
  @Input()
  set size(v: SynAccordion['size']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.size = v));
  }

  get size() {
    return this.nativeElement.size;
  }
}