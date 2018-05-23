import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'nb-input-number',
  template: `
    <div class="input-group">
      <div class="input-group-prepend">
        <button class="btn btn-secondary" (click)="decrement()" type="button" [disabled]="disabled">
          <i class="fa fa-minus"></i>
        </button>
      </div>
      <input type="text" [disabled]="disabled" class="form-control" [(ngModel)]="value" nbNumberOnly/>
      <div class="input-group-append">
        <button class="btn btn-secondary" (click)="increment()" type="button" [disabled]="disabled">
          <i class="fa fa-plus"></i>
        </button>
      </div>
    </div>`,
})
export class NbInputNumberComponent {
  @Input()
  value: number;

  @Output()
  valueChange: EventEmitter<number> = new EventEmitter<number>();

  @Input()
  disabled = false;

  @Input()
  allowNegative = false;

  decrement() {
    console.log(this.value);
    if (this.allowNegative) {
      this.value = this.value ? this.value - 1 : -1;
    } else if (this.value) {
      this.value--;
    }

    this.valueChange.emit(this.value);
  }

  increment() {
    console.log(this.value);
    if (!this.value) {
      this.value = 1;
    } else {
      this.value++;
    }

    this.valueChange.emit(this.value);
  }
}
