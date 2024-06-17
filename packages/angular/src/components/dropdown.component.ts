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
  SynAfterHideEvent, SynAfterShowEvent, SynDropdown, SynHideEvent, SynShowEvent,
} from '@synergy-design-system/components';
import '@synergy-design-system/components/components/dropdown/dropdown.js';

/**
 * @summary Dropdowns expose additional content that "drops down" in a panel.
 * @documentation https://synergy.style/components/dropdown
 * @status stable
 * @since 2.0
 *
 * @dependency syn-popup
 *
 * @slot - The dropdown's main content.
 * @slot trigger - The dropdown's trigger, usually a `<syn-button>` element.
 *
 * @event syn-show - Emitted when the dropdown opens.
 * @event syn-after-show - Emitted after the dropdown opens and all animations are complete.
 * @event syn-hide - Emitted when the dropdown closes.
 * @event syn-after-hide - Emitted after the dropdown closes and all animations are complete.
 *
 * @csspart base - The component's base wrapper.
 * @csspart trigger - The container that wraps the trigger.
 * @csspart panel - The panel that gets shown when the dropdown is open.
 *
 * @animation dropdown.show - The animation to use when showing the dropdown.
 * @animation dropdown.hide - The animation to use when hiding the dropdown.
 */
@Component({
  selector: 'syn-dropdown',
  standalone: true,
  template: '<ng-content></ng-content>',
})
export class SynDropdownComponent {
  public nativeElement: SynDropdown;

  private _ngZone: NgZone;

  constructor(e: ElementRef, ngZone: NgZone) {
    this.nativeElement = e.nativeElement;
    this._ngZone = ngZone;
    this.nativeElement.addEventListener('syn-show', (e: SynShowEvent) => { this.synShowEvent.emit(e); });
    this.nativeElement.addEventListener('syn-after-show', (e: SynAfterShowEvent) => { this.synAfterShowEvent.emit(e); });
    this.nativeElement.addEventListener('syn-hide', (e: SynHideEvent) => { this.synHideEvent.emit(e); });
    this.nativeElement.addEventListener('syn-after-hide', (e: SynAfterHideEvent) => { this.synAfterHideEvent.emit(e); });
  }

  /**
* Indicates whether or not the dropdown is open.
* You can toggle this attribute to show and hide the dropdown, or you
can use the `show()` and `hide()` methods and this attribute will reflect the dropdown's open state.
 */
  @Input()
  set open(v: SynDropdown['open']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.open = v));
  }

  get open() {
    return this.nativeElement.open;
  }

  /**
* The preferred placement of the dropdown panel.
* Note that the actual placement may vary as needed to keep the panel
inside of the viewport.
 */
  @Input()
  set placement(v: SynDropdown['placement']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.placement = v));
  }

  get placement() {
    return this.nativeElement.placement;
  }

  /**
* Disables the dropdown so the panel will not open.
 */
  @Input()
  set disabled(v: SynDropdown['disabled']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.disabled = v));
  }

  get disabled() {
    return this.nativeElement.disabled;
  }

  /**
* By default, the dropdown is closed when an item is selected.
* This attribute will keep it open instead.
* Useful for
dropdowns that allow for multiple interactions.
 */
  @Input()
  set stayOpenOnSelect(v: SynDropdown['stayOpenOnSelect']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.stayOpenOnSelect = v));
  }

  get stayOpenOnSelect() {
    return this.nativeElement.stayOpenOnSelect;
  }

  /**
* The distance in pixels from which to offset the panel away from its trigger.
 */
  @Input()
  set distance(v: SynDropdown['distance']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.distance = v));
  }

  get distance() {
    return this.nativeElement.distance;
  }

  /**
* The distance in pixels from which to offset the panel along its trigger.
 */
  @Input()
  set skidding(v: SynDropdown['skidding']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.skidding = v));
  }

  get skidding() {
    return this.nativeElement.skidding;
  }

  /**
* Enable this option to prevent the panel from being clipped when the component is placed inside a container with
`overflow: auto|scroll`.
* Hoisting uses a fixed positioning strategy that works in many, but not all, scenarios.
 */
  @Input()
  set hoist(v: SynDropdown['hoist']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.hoist = v));
  }

  get hoist() {
    return this.nativeElement.hoist;
  }

  /**
* Syncs the popup width or height to that of the trigger element.
 */
  @Input()
  set sync(v: SynDropdown['sync']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.sync = v));
  }

  get sync() {
    return this.nativeElement.sync;
  }

  /**
* Emitted when the dropdown opens.
 */
  @Output() synShowEvent = new EventEmitter<SynShowEvent>();

  /**
* Emitted after the dropdown opens and all animations are complete.
 */
  @Output() synAfterShowEvent = new EventEmitter<SynAfterShowEvent>();

  /**
* Emitted when the dropdown closes.
 */
  @Output() synHideEvent = new EventEmitter<SynHideEvent>();

  /**
* Emitted after the dropdown closes and all animations are complete.
 */
  @Output() synAfterHideEvent = new EventEmitter<SynAfterHideEvent>();
}

export type { SynShowEvent } from '@synergy-design-system/components';
export type { SynAfterShowEvent } from '@synergy-design-system/components';
export type { SynHideEvent } from '@synergy-design-system/components';
export type { SynAfterHideEvent } from '@synergy-design-system/components';