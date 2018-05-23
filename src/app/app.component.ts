import { NbBootstrapModalComponent } from '../@netbiis/nb-bootstrap-modal/nb-bootstrap-modal.component';
import { Component, ViewChild } from '@angular/core';
import { DateParts } from '../@netbiis/nb-datepicker/date-parts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  datePartsValues: DateParts[] = [];
  dateValues: Date[] = [];
  numberValue: number;

  @ViewChild(NbBootstrapModalComponent) modal: NbBootstrapModalComponent;

  datePickerChanged(value: DateParts, index: number) {
    this.datePartsValues[index] = value;
  }

  dateValueChanged(date: Date, index: number) {
    this.dateValues[index] = date;
  }
}
