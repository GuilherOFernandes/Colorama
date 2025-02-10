import { Component, NgModule, OnInit } from '@angular/core';
import { OrdersService } from './orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})

export class OrdersComponent implements OnInit {
  cartProducts: any[] = [];

  constructor(private ordersService: OrdersService) {}

  ngOnInit(): void {
    this.ordersService.currentCartItems.subscribe(items => {
      this.cartProducts = items;
      console.log('Itens do carrinho:', items);
    });
  }

  removeFromCart(product: any) {
    this.ordersService.removeFromCart(product);
  }
}