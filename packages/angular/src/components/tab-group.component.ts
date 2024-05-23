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
import type { SynTabGroup, SynTabHideEvent, SynTabShowEvent } from '@synergy-design-system/components';
import '@synergy-design-system/components/components/tab-group/tab-group.js';

/**
 * @summary Tab groups organize content into a container that shows one section at a time.
 * @documentation https://synergy.style/components/tab-group
 * @status stable
 * @since 2.0
 *
 * @dependency syn-icon-button
 *
 * @slot - Used for grouping tab panels in the tab group. Must be `<syn-tab-panel>` elements.
 * @slot nav - Used for grouping tabs in the tab group. Must be `<syn-tab>` elements.
 *
 * @event {{ name: String }} syn-tab-show - Emitted when a tab is shown.
 * @event {{ name: String }} syn-tab-hide - Emitted when a tab is hidden.
 *
 * @csspart base - The component's base wrapper.
 * @csspart nav - The tab group's navigation container where tabs are slotted in.
 * @csspart tabs - The container that wraps the tabs.
 * @csspart active-tab-indicator - The line that highlights the currently selected tab.
 * @csspart body - The tab group's body where tab panels are slotted in.
 * @csspart scroll-button - The previous/next scroll buttons that show when tabs are scrollable, an `<syn-icon-button>`.
 * @csspart scroll-button--start - The starting scroll button.
 * @csspart scroll-button--end - The ending scroll button.
 * @csspart scroll-button__base - The scroll button's exported `base` part.
 *
 * @cssproperty --indicator-color - The color of the active tab indicator.
 * @cssproperty --indicator-width - The width of the active tab indicator.
 * @cssproperty --track-color - The color of the indicator's track (the line that separates tabs from panels).
 * @cssproperty --track-width - The width of the indicator's track (the line that separates tabs from panels).
 */
@Component({
  selector: 'syn-tab-group',
  standalone: true,
  template: '<ng-content></ng-content>',
})
export class SynTabGroupComponent {
  public nativeElement: SynTabGroup;

  private _ngZone: NgZone;

  constructor(e: ElementRef, ngZone: NgZone) {
    this.nativeElement = e.nativeElement;
    this._ngZone = ngZone;
    this.nativeElement.addEventListener('syn-tab-show', (e: SynTabShowEvent) => { this.synTabShowEvent.emit(e); });
    this.nativeElement.addEventListener('syn-tab-hide', (e: SynTabHideEvent) => { this.synTabHideEvent.emit(e); });
  }

  /**
* The placement of the tabs.
 */
  @Input()
  set placement(v: SynTabGroup['placement']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.placement = v));
  }

  get placement() {
    return this.nativeElement.placement;
  }

  /**
* When set to auto, navigating tabs with the arrow keys will instantly show the corresponding tab panel.
* When set to
manual, the tab will receive focus but will not show until the user presses spacebar or enter.
 */
  @Input()
  set activation(v: SynTabGroup['activation']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.activation = v));
  }

  get activation() {
    return this.nativeElement.activation;
  }

  /**
* Disables the scroll arrows that appear when tabs overflow.
 */
  @Input()
  set noScrollControls(v: SynTabGroup['noScrollControls']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.noScrollControls = v));
  }

  get noScrollControls() {
    return this.nativeElement.noScrollControls;
  }

  /**
* Draws the tab group as a contained element.
 */
  @Input()
  set contained(v: SynTabGroup['contained']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.contained = v));
  }

  get contained() {
    return this.nativeElement.contained;
  }

  /**
* Draws the tab group with edges instead of roundings.
* Takes only effect if used with the 'contained' property
 */
  @Input()
  set sharp(v: SynTabGroup['sharp']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.sharp = v));
  }

  get sharp() {
    return this.nativeElement.sharp;
  }

  @Input()
  callUpdateScrollControls(...args: Parameters<SynTabGroup['updateScrollControls']>) {
    return this._ngZone.runOutsideAngular(() => this.nativeElement.updateScrollControls(...args));
  }

  @Input()
  callSyncIndicator(...args: Parameters<SynTabGroup['syncIndicator']>) {
    return this._ngZone.runOutsideAngular(() => this.nativeElement.syncIndicator(...args));
  }

  @Input()
  callSyncTabs(...args: Parameters<SynTabGroup['syncTabs']>) {
    return this._ngZone.runOutsideAngular(() => this.nativeElement.syncTabs(...args));
  }

  /**
* Shows the specified tab panel.
 */
  @Input()
  callShow(...args: Parameters<SynTabGroup['show']>) {
    return this._ngZone.runOutsideAngular(() => this.nativeElement.show(...args));
  }

  /**
* Emitted when a tab is shown.
 */
  @Output() synTabShowEvent = new EventEmitter<SynTabShowEvent>();

  /**
* Emitted when a tab is hidden.
 */
  @Output() synTabHideEvent = new EventEmitter<SynTabHideEvent>();
}

export type { SynTabShowEvent } from '@synergy-design-system/components';
export type { SynTabHideEvent } from '@synergy-design-system/components';
