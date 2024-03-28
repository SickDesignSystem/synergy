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
import type { SynHorizontalNav } from '@synergy-design-system/components';

import '@synergy-design-system/components/components/horizontal-nav/horizontal-nav.js';

/**
 * @summary The `<syn-horizontal-nav />` element provides a generic navigation bar
 * that can be used to group multiple navigation items  (usually `<syn-nav-item />`s) together.
 * It will automatically group all items not visible in the viewport into a custom priority menu
 *
 * @example
 * <syn-horizontal-nav>
 *  <syn-nav-item current>Item 1</syn-nav-item>
 *  <button role="menuitem">Item 2 (custom)</button>
 *  <syn-nav-item current>Item 3</syn-nav-item>
 * </syn-horizontal-nav>
 *
 * @documentation https://synergy-design-system.github.io/?path=/docs/components-syn-horizontal-nav--docs
 * @status stable
 * @since 1.10
 *
 * @dependency syn-dropdown
 * @dependency syn-icon
 * @dependency syn-menu
 * @dependency syn-nav-item
 *
 * @slot - The given navigation items. Must be `<syn-nav-item>`s or have a role of "menuitem"
 *
 * @csspart base - The component's base wrapper.
 * @csspart priority-menu - The wrapper around the priority menu
 * @csspart priority-menu-label - The label for the priority menu
 *
 * @cssproperty --navigation-spacing - The amount of outer padding to use for the navigation.
 *
 * @todo more_horiz - Icon should be part of system library (and renamed to "more")
 */
@Component({
  selector: 'syn-horizontal-nav',
  standalone: true,
  template: '<ng-content></ng-content>',
})
export class SynHorizontalNavComponent {
  private _el: SynHorizontalNav;

  private _ngZone: NgZone;

  constructor(e: ElementRef, ngZone: NgZone) {
    this._el = e.nativeElement;
    this._ngZone = ngZone;
  }

  /**
* The components priority menu label.
This will be shown after the priority menu 3 dots link
 */
  @Input()
  set priorityMenuLabel(v: SynHorizontalNav['priorityMenuLabel']) {
    this._ngZone.runOutsideAngular(() => (this._el.priorityMenuLabel = v));
  }

  get priorityMenuLabel() {
    return this._el.priorityMenuLabel;
  }
}