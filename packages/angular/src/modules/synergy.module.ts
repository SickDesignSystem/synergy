// ---------------------------------------------------------------------
// 🔒 AUTOGENERATED @synergy-design-system/angular wrappers for @synergy-design-system/components
// Please do not edit this file directly!
// It will get recreated when running pnpm build.
// ---------------------------------------------------------------------
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import {
  SynButtonComponent,
  SynIconComponent,
  SynInputComponent,
  SynSpinnerComponent,
} from '../components';

const components = [
  SynButtonComponent,
  SynIconComponent,
  SynInputComponent,
  SynSpinnerComponent,
];

@NgModule({
  imports: components,
  exports: components,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SynergyElementsModule {}
