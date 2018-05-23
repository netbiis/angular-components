import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DateParts } from './date-parts';

@Component({
  selector: 'nb-datepicker',
  template: `
    <div class="input-group">
      <input class="form-control"
             [readonly]="!canEdit"
             [disabled]="disabled"
             [placeholder]="inputPlaceholder"
             [ngModel]="value"
             (ngModelChange)="dateChange($event)"
             ngbDatepicker
             #d="ngbDatepicker">
      <div class="input-group-append">
        <button class="btn btn-secondary" (click)="d.toggle()" type="button" [disabled]="disabled">
          <i [class]="buttonIcon"></i>
        </button>
      </div>
    </div>
  `
})
export class NbDatepickerComponent {
  @Input()
  disabled: boolean = false;

  @Input()
  canEdit: boolean = false;

  @Input()
  inputPlaceholder: string = '';

  @Input()
  buttonIcon: string = 'fa fa-calendar';

  @Input()
  value: DateParts;

  @Output()
  valueChange: EventEmitter<DateParts> = new EventEmitter<DateParts>();

  @Output()
  dateValueChange: EventEmitter<Date> = new EventEmitter<Date>();

  dateChange(value: DateParts) {
    this.valueChange.emit(value);
    this.dateValueChange.emit(new Date(value.year, value.month - 1, value.day, 0, 0, 0, 0));
  }
}
