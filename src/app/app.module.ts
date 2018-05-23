import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NbBootstrapModalModule } from '../@netbiis/nb-bootstrap-modal/nb-bootstrap-modal.module';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NbDatepickerModule } from '../@netbiis/nb-datepicker/nb-datepicker.module';
import { NbInputNumberModule } from '../@netbiis/nb-input-number/nb-input-number.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NbBootstrapModalModule,
    NgbModule.forRoot(),
    NgbModalModule.forRoot(),
    NbDatepickerModule,
    NbInputNumberModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
