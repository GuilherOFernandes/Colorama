import { CommonModule } from '@angular/common';
import { Component, TemplateRef } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

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
  product: any;

  addToCart(): void {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(this.product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${this.product.name} foi adicionado ao carrinho!`);
    this.bsModalRef.hide(); // Fechar o modal após adicionar ao carrinho
  }

  constructor(public bsModalRef: BsModalRef) {}
}
