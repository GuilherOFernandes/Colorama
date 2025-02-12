import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrdersService } from './orders.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  cartProducts: any[] = [];
  totalPrice: number = 0;

  constructor(private ordersService: OrdersService, private router: Router) {}

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

  finalizarCompra() {
    if (this.totalPrice <= 0) {
      Swal.fire({
        icon: 'warning',
        title: 'Carrinho vazio!',
        text: 'Adicione itens antes de finalizar a compra.',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK'
      });
      return;
    }
    this.router.navigate(['/pagamento']);
  }
}