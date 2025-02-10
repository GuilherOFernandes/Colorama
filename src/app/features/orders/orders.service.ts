import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private cartItems = new BehaviorSubject<any[]>([]);
  currentCartItems = this.cartItems.asObservable();

  constructor() {}

  addToCart(product: any) {
    const currentItems = this.cartItems.getValue();
    this.cartItems.next([...currentItems, product]);
    console.log('Produto adicionado ao carrinho:', product)
  }

  removeFromCart(product: any) {
    const currentItems = this.cartItems.getValue();
    const updatedItems = currentItems.filter(item => item.id !== product.id);
    this.cartItems.next(updatedItems);
  }
}