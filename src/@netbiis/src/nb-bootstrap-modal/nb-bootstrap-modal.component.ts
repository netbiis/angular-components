import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'nb-modal-header',
  template: `
    <ng-content></ng-content>
  `
})
export class NbBootstrapModalHeaderComponent {
}

@Component({
  selector: 'nb-modal-body',
  template: `
    <ng-content></ng-content>
  `
})
export class NbBootstrapModalBodyComponent {
}

@Component({
  selector: 'nb-modal-footer',
  template: `
    <ng-content></ng-content>
  `
})
export class NbBootstrapModalFooterComponent {
}

@Component({
  selector: 'nb-modal',
  template: `
    <ng-template #template>
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">
            <ng-content select="nb-modal-header"></ng-content>
          </h4>
          <button class="close" aria-label="Close" (click)="close()">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <ng-content select="nb-modal-body"></ng-content>
        </div>
        <div class="modal-footer">
          <ng-content select="nb-modal-footer"></ng-content>
        </div>
      </div>
    </ng-template>
  `
})
export class NbBootstrapModalComponent {
  @ViewChild('template') private template: TemplateRef<any>;
  @Input() small: boolean = false;

  private activeModal: NgbModalRef;

  constructor(private modalService: NgbModal) {
  }

  open() {
    this.activeModal = this.modalService.open(this.template, {
      size: this.small ? 'sm' : 'lg'
    });
  }

  close() {
    this.activeModal.close();
  }
}
