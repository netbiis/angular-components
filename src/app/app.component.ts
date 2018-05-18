import { Component, ViewChild } from '@angular/core';
import { NbBootstrapModalComponent } from '../@netbiis/src/nb-bootstrap-modal/nb-bootstrap-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  @ViewChild(NbBootstrapModalComponent) modal: NbBootstrapModalComponent;

  click() {
    this.modal.open();
    this.modal.close();
  }
}
