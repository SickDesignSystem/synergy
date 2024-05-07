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
  SynBurgerMenuClosedEvent, SynBurgerMenuHiddenEvent, SynBurgerMenuOpenEvent, SynHeader,
} from '@synergy-design-system/components';
import '@synergy-design-system/components/components/header/header.js';

/**
 * @summary The <syn-header /> element provides a generic application header
 * that can be used to add applications name, toolbar and primary navigation.
 *
 * @documentation https://synergy-design-system.github.io/?path=/docs/components-syn-header--docs
 * @status stable
 * @since 1.10.0
 *
 * @slot label - The label for the header
 * @slot logo - The logo that should be displayed. Will fall back to the SICK logo if not provided
 * @slot meta-navigation - The meta-navigation is used to add various application toolbar icons
 *                     Best used with `<syn-icon-button />` and `<syn-drop-down />`
 * @slot navigation - This slot can be used to add an optional horizontal navigation
 * @slot open-burger-menu-icon - An icon to use in lieu of the default burger-menu=open state.
 *                      The default close icon is a 'x'.
 * @slot closed-burger-menu-icon - An icon to use in lieu of the default burger-menu=closed state.
 *                      The default open icon is a burger menu.
 *
 * @event syn-burger-menu-closed - Emitted when the burger menu is toggled to closed
 * @event syn-burger-menu-hidden - Emitted when the burger menu is toggled to hidden
 * @event syn-burger-menu-open - Emitted when the burger menu is toggled to open
 *
 * @csspart base - The component's base wrapper
 * @csspart content - The wrapper most content items reside
 * @csspart logo - The wrapper the application logo resides in
 * @csspart label - The element wrapping the application name
 * @csspart meta-navigation - The Item wrapping the optional application menu
 * @csspart navigation - The wrapper that is holding the optional top navigation section
 * @csspart burger-menu-toggle-button - The button that toggles the burger menu
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
    this._el.addEventListener('syn-burger-menu-closed', (e: SynBurgerMenuClosedEvent) => { this.synBurgerMenuClosedEvent.emit(e); });
    this._el.addEventListener('syn-burger-menu-hidden', (e: SynBurgerMenuHiddenEvent) => { this.synBurgerMenuHiddenEvent.emit(e); });
    this._el.addEventListener('syn-burger-menu-open', (e: SynBurgerMenuOpenEvent) => { this.synBurgerMenuOpenEvent.emit(e); });
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

  /**
* Defines the current visibility and icon of the burger-menu icon.
The menu button is added automatically if the component finds a syn-side-nav in non-rail mode.
The following values can be used:
- hidden: The burger menu is not visible
- open: The burger menu is visible and shows the close icon
- closed: The burger menu is visible and shows the open icon
 */
  @Input()
  set burgerMenu(v: SynHeader['burgerMenu']) {
    this._ngZone.runOutsideAngular(() => (this._el.burgerMenu = v));
  }

  get burgerMenu() {
    return this._el.burgerMenu;
  }

  @Input()
  callHandleBurgerMenu(...args: Parameters<SynHeader['handleBurgerMenu']>) {
    return this._ngZone.runOutsideAngular(() => this._el.handleBurgerMenu(...args));
  }

  /**
* Connect a `syn-side-nav` to add automatic interaction of the header with the side navigation
like showing the burger menu icon and open / close handling.

If no side navigation is connected, the header will use the first `syn-side-nav` element it
finds.
 */
  @Input()
  callConnectSideNavigation(...args: Parameters<SynHeader['connectSideNavigation']>) {
    return this._ngZone.runOutsideAngular(() => this._el.connectSideNavigation(...args));
  }

  /**
* Emitted when the burger menu is toggled to closed
 */
  @Output() synBurgerMenuClosedEvent = new EventEmitter<SynBurgerMenuClosedEvent>();

  /**
* Emitted when the burger menu is toggled to hidden
 */
  @Output() synBurgerMenuHiddenEvent = new EventEmitter<SynBurgerMenuHiddenEvent>();

  /**
* Emitted when the burger menu is toggled to open
 */
  @Output() synBurgerMenuOpenEvent = new EventEmitter<SynBurgerMenuOpenEvent>();
}

export type { SynBurgerMenuClosedEvent } from '@synergy-design-system/components';
export type { SynBurgerMenuHiddenEvent } from '@synergy-design-system/components';
export type { SynBurgerMenuOpenEvent } from '@synergy-design-system/components';
