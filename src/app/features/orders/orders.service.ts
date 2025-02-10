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
    const cartItems = {
      ...product,
      cartItemId: this.generateUniqueId() 
    };
    this.cartItems.next([...currentItems, cartItems]);
  }

  removeFromCart(cartItemId: string) {
    const currentItems = this.cartItems.getValue();
    const updatedItems = currentItems.filter(item => item.cartItemId !== cartItemId); 
    this.cartItems.next(updatedItems);
  }

  getTotalPrice(): number {
    const currentItems = this.cartItems.getValue();
    return currentItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace('R$', '').replace(',', '.'));
      return total + price;
    }, 0);
  }

  private generateUniqueId():string{
    return Math.random().toString(36).substring(2, 9);
  }
}