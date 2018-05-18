import { NgModule } from '@angular/core';
import {
  NbBootstrapModalBodyComponent,
  NbBootstrapModalComponent,
  NbBootstrapModalFooterComponent,
  NbBootstrapModalHeaderComponent
} from './nb-bootstrap-modal.component';

export const MODAL_COMPONENTS = [
  NbBootstrapModalComponent,
  NbBootstrapModalBodyComponent,
  NbBootstrapModalHeaderComponent,
  NbBootstrapModalFooterComponent
];

@NgModule({
  declarations: [...MODAL_COMPONENTS],
  exports: [...MODAL_COMPONENTS]
})
export class NbBootstrapModalModule {
}
