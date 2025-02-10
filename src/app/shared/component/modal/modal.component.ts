import { Component, TemplateRef } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { OrdersService } from '../../../features/orders/orders.service';

@Component({
  selector: 'intra-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  title?: string;
  closeBtnName?: string;
  list: string[] = [];
  formTemplate!: TemplateRef<any>;
  iconTemplate: string = '';
  product: any = null; 

  constructor(
    public bsModalRef: BsModalRef,
    private ordersService: OrdersService
  ) {}

  openModal(product: any): void {
    if (!product) {
      console.error('Produto não encontrado');
      return;
    }
    this.product = product; // Define o produto antes de abrir o modal
  }

  addToCart(): void {
    if (!this.product) return;

    this.ordersService.addToCart(this.product); // Adiciona ao carrinho via serviço
    alert(`${this.product.name} foi adicionado ao carrinho!`);
    this.bsModalRef.hide();
  }
}
