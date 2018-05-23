import { NgModule } from '@angular/core';
import { NbDatepickerComponent } from './nb-datepicker.component';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbDatepickerModule
  ],
  declarations: [
    NbDatepickerComponent
  ],
  exports: [
    NbDatepickerComponent
  ]
})
export class NbDatepickerModule {
}
