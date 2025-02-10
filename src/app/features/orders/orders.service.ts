import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', 
})
export class OrdersService {
  cartProducts: any[] = []; 

  constructor(private ordersService: OrdersService) {}

 
  getCart() {
    return this.cartProducts;
  }


  addToCart(product: any) {
    this.cartProducts.push(product);
  }

  ngOnInit(): void {
    this.cartProducts = this.ordersService.getCart(); // Obtém os produtos do serviço
  }

  removeFromCart(product: any) {
    this.ordersService.removeFromCart(product);
  }
}