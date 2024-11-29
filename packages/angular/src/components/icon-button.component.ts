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
import type { SynIconButton } from '@synergy-design-system/components';
import type { SynBlurEvent } from '@synergy-design-system/components';
import type { SynFocusEvent } from '@synergy-design-system/components';
import '@synergy-design-system/components/components/icon-button/icon-button.js';

/**
 * @summary Icons buttons are simple, icon-only buttons that can be used for actions and in toolbars.
 * @documentation https://synergy.style/components/icon-button
 * @status stable
 * @since 2.0
 *
 * @dependency syn-icon
 *
 * @event syn-blur - Emitted when the icon button loses focus.
 * @event syn-focus - Emitted when the icon button gains focus.
 *
 * @csspart base - The component's base wrapper.
 */
@Component({
  selector: 'syn-icon-button',
  standalone: true,
  template: '<ng-content></ng-content>',
})
export class SynIconButtonComponent {
  public nativeElement: SynIconButton;
  private _ngZone: NgZone;

  constructor(e: ElementRef, ngZone: NgZone) {
    this.nativeElement = e.nativeElement;
    this._ngZone = ngZone;
    this.nativeElement.addEventListener('syn-blur', (e: SynBlurEvent) => {
      this.synBlurEvent.emit(e);
    });
    this.nativeElement.addEventListener('syn-focus', (e: SynFocusEvent) => {
      this.synFocusEvent.emit(e);
    });
  }

  /**
   * The name of the icon to draw.
   * Available names depend on the icon library being used.
   */
  @Input()
  set name(v: SynIconButton['name']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.name = v));
  }
  get name(): SynIconButton['name'] {
    return this.nativeElement.name;
  }

  /**
   * The name of a registered custom icon library.
   */
  @Input()
  set library(v: SynIconButton['library']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.library = v));
  }
  get library(): SynIconButton['library'] {
    return this.nativeElement.library;
  }

  /**
* An external URL of an SVG file.
* Be sure you trust the content you are including, as it will be executed as code and
can result in XSS attacks.
 */
  @Input()
  set src(v: SynIconButton['src']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.src = v));
  }
  get src(): SynIconButton['src'] {
    return this.nativeElement.src;
  }

  /**
   * When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`.
   */
  @Input()
  set href(v: SynIconButton['href']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.href = v));
  }
  get href(): SynIconButton['href'] {
    return this.nativeElement.href;
  }

  /**
   * Tells the browser where to open the link.
   * Only used when `href` is set.
   */
  @Input()
  set target(v: SynIconButton['target']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.target = v));
  }
  get target(): SynIconButton['target'] {
    return this.nativeElement.target;
  }

  /**
   * Tells the browser to download the linked file as this filename.
   * Only used when `href` is set.
   */
  @Input()
  set download(v: SynIconButton['download']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.download = v));
  }
  get download(): SynIconButton['download'] {
    return this.nativeElement.download;
  }

  /**
* A description that gets read by assistive devices.
* For optimal accessibility, you should always include a label
that describes what the icon button does.
 */
  @Input()
  set label(v: SynIconButton['label']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.label = v));
  }
  get label(): SynIconButton['label'] {
    return this.nativeElement.label;
  }

  /**
   * The icon button's size.
   */
  @Input()
  set size(v: SynIconButton['size']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.size = v));
  }
  get size(): SynIconButton['size'] {
    return this.nativeElement.size;
  }

  /**
* The color of the icon button.
The default "currentColor" makes it possible to easily style the icon button from outside without any CSS variables.
 */
  @Input()
  set color(v: SynIconButton['color']) {
    this._ngZone.runOutsideAngular(() => (this.nativeElement.color = v));
  }
  get color(): SynIconButton['color'] {
    return this.nativeElement.color;
  }

  /**
   * Disables the button.
   */
  @Input()
  set disabled(v: '' | SynIconButton['disabled']) {
    this._ngZone.runOutsideAngular(
      () => (this.nativeElement.disabled = v === '' || v),
    );
  }
  get disabled(): SynIconButton['disabled'] {
    return this.nativeElement.disabled;
  }

  /**
   * Emitted when the icon button loses focus.
   */
  @Output() synBlurEvent = new EventEmitter<SynBlurEvent>();

  /**
   * Emitted when the icon button gains focus.
   */
  @Output() synFocusEvent = new EventEmitter<SynFocusEvent>();
}

export type { SynBlurEvent } from '@synergy-design-system/components';
export type { SynFocusEvent } from '@synergy-design-system/components';
