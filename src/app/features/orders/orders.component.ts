import { Component, OnInit } from '@angular/core';
import { OrdersService } from './orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  cartProducts: any[] = [];
  totalPrice: number = 0;

  constructor(private ordersService: OrdersService) {}

  ngOnInit(): void {
    this.ordersService.currentCartItems.subscribe(items => {
      this.cartProducts = items;
      this.totalPrice = this.ordersService.getTotalPrice();
    });
  }

  removeFromCart(cartItemId: string) {
    this.ordersService.removeFromCart(cartItemId); 
    this.totalPrice = this.ordersService.getTotalPrice();
  }
}