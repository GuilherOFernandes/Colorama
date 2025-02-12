import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private cartItems = new BehaviorSubject<any[]>([]);
  currentCartItems = this.cartItems.asObservable();
  private discount = 10; // Desconto fixo de R$10,00

  constructor() {}

  addToCart(product: any) {
    const currentItems = this.cartItems.getValue();
    const cartItem = {
      ...product,
      cartItemId: this.generateUniqueId()
    };
    this.cartItems.next([...currentItems, cartItem]);
  }

  removeFromCart(cartItemId: string) {
    const currentItems = this.cartItems.getValue();
    const updatedItems = currentItems.filter(item => item.cartItemId !== cartItemId);
    this.cartItems.next(updatedItems);
  }

  getSubtotal(): number {
    const currentItems = this.cartItems.getValue();
    return currentItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace('R$', '').replace(',', '.'));
      return total + price;
    }, 0);
  }

  getDiscount(): number {
    return this.discount;
  }

  getTotalPrice(): number {
    const subtotal = this.getSubtotal();
    return Math.max(subtotal - this.discount, 0); // Garante que o total não fique negativo
  }

  private generateUniqueId(): string {
    return Math.random().toString(36).substring(2, 9);
  }
}
