import { NgModule } from '@angular/core';
import { NbInputNumberComponent } from './nb-input-number.component';
import { NumberOnlyDirective } from './number-only.directive';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    NbInputNumberComponent,
    NumberOnlyDirective
  ],
  exports: [
    NumberOnlyDirective,
    NbInputNumberComponent
  ]
})
export class NbInputNumberModule {

}
