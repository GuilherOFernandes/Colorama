import { Component, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  standalone: false
})
export class ProductsComponent {
  bsModalRef?: BsModalRef;
 
  confirmModalRef?: BsModalRef;
  confirmResolve?: () => void;
  confirmReject?: () => void;
  confirmPromise?: Promise<void>;
 
  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>) {
    this.bsModalRef = this.modalService.show(template, {
      class: 'modal-lg',
    });
  }

  closeModal(): void {
    this.bsModalRef?.hide();
  }
 
  openModalWithInterceptor(confirmTemplate: TemplateRef<void>) {
    const closeInterceptor = () => {
      this.confirmPromise = new Promise((resolve, reject) => {
        this.confirmResolve = resolve;
        this.confirmReject = reject;
      });
      this.confirmModalRef = this.modalService.show(confirmTemplate, { class: 'modal-sm' });
 
      return this.confirmPromise;
    };
    this.bsModalRef = this.modalService.show(ModalContentWithInterceptorComponent, { closeInterceptor });
    this.bsModalRef.content.closeBtnName = 'Close';
  }
 
  confirm(): void {
    if (this.confirmResolve) {
      this.confirmResolve();
    }
    this.confirmModalRef?.hide();
  }
 
  decline(): void {
    if (this.confirmReject) {
      this.confirmReject();
    }
    this.confirmModalRef?.hide();
  }
}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'modal-content-with-interceptor',
  template: `
    <div class="modal-overlay">
      <div class="modal-container">
        <button
          type="button"
          class="close-btn"
          aria-label="Close"
          (click)="bsModalRef?.hide()"
        >
          &times;
        </button>
        <div class="modal-content">
          <img
            src="assets/images/004591fb67cf8816eb223c36a0cef2c4.jpg"
            alt="Aguarrás"
            class="modal-image"
          />
          <div class="modal-details">
            <h3>Aguarrás</h3>
            <p><strong>Indicação de uso:</strong></p>
            <p>
              Indicado na diluição de esmaltes sintéticos longos em óleo,
              desengraxante e desengordurante.
            </p>
            <label for="size">Tamanho:</label>
            <select id="size">
              <option value="">----</option>
              <option value="5L">5L</option>
              <option value="10L">10L</option>
            </select>
            <button class="btn btn-primary">Solicitar Orçamento</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./products.component.scss'], // Caminho ajustado
  standalone: false
})
export class ModalContentWithInterceptorComponent {
  constructor(public bsModalRef: BsModalRef) {}
}