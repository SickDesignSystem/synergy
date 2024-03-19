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
import type { SynHeader } from '@synergy-design-system/components';

import '@synergy-design-system/components/components/header/header.js';

/**
 * @summary The <syn-header /> element provides a generic application header
 * that can be used to add applications name, toolbar and primary navigation.
 *
 * @documentation https://synergy-design-system.github.io/?path=/docs/components-syn-header--docs
 * @status stable
 * @since 1.10.0
 *
 * @slot - The label for the header.
 * @slot logo - The logo that should be displayed. Will fall back to the SICK logo if not provided.
 * @slot meta-navigation - The meta-navigation is used to add various application toolbar icons.
 *                     Best used with `<syn-icon-button />` and `<syn-drop-down />`
 * @slot navigation - This slot can be used to add an optional horizontal navigation
 *
 * @csspart base - The component's base wrapper.
 * @csspart content - The wrapper most content items reside
 * @csspart logo - The wrapper the application logo resides in
 * @csspart label - The element wrapping the application name
 * @csspart meta-navigation - The Item wrapping the optional application menu
 * @csspart navigation - The wrapper that is holding the optional top navigation section
 */
@Component({
  selector: 'syn-header',
  standalone: true,
  template: '<ng-content></ng-content>',
})
export class SynHeaderComponent {
  private _el: SynHeader;

  private _ngZone: NgZone;

  constructor(e: ElementRef, ngZone: NgZone) {
    this._el = e.nativeElement;
    this._ngZone = ngZone;
  }

  /**
* The headers label.
* If you need to display HTML, use the `label` slot instead.
 */
  @Input()
  set label(v: SynHeader['label']) {
    this._ngZone.runOutsideAngular(() => (this._el.label = v));
  }

  get label() {
    return this._el.label;
  }
}
