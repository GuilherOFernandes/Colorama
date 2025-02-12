import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../../orders/orders.service';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.scss'],
})
export class PagamentoComponent implements OnInit {
  cartProducts: any[] = [];
  subtotal: number = 0;
  desconto: number = 0;
  total: number = 0;
  metodoSelecionado: string = '';
  exibirOpcoesPagamento: boolean = false;
  qrCodeBase64: string | null = null;

  constructor(private ordersService: OrdersService, private http: HttpClient) {}

  ngOnInit(): void {
    this.ordersService.currentCartItems.subscribe(items => {
      this.cartProducts = items;
      this.subtotal = this.ordersService.getSubtotal();
      this.desconto = this.ordersService.getDiscount();
      this.total = this.ordersService.getTotalPrice();
    });
  }

  mostrarOpcoesPagamento() {
    this.exibirOpcoesPagamento = true;
  }

  selecionarPagamento(metodo: string) {
    this.metodoSelecionado = metodo;

    if (metodo === 'pix') {
      this.gerarQrCodePix();
    } else {
      Swal.fire({
        title: 'Pagamento realizado!',
        icon: 'success',
        text: `Você escolheu o pagamento via ${metodo}.`,
        confirmButtonText: 'Ok!',
      });
    }
  }

  finalizarCompra() {
    // Captura os campos do formulário
    const nome = (document.getElementById('nome') as HTMLInputElement).value;
    const cpf = (document.getElementById('cpf') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const celular = (document.getElementById('celular') as HTMLInputElement).value;

    // Verifica se algum campo está vazio
    if (!nome || !cpf || !email || !celular) {
      Swal.fire({
        icon: 'warning',
        title: 'Campos obrigatórios!',
        text: 'Preencha todos os campos antes de finalizar a compra.',
        confirmButtonColor: '#d33',
        confirmButtonText: 'OK'
      });
      return;
    }

    if (!this.metodoSelecionado) {
      Swal.fire({
        title: "Erro!",
        icon: "error",
        text: "Por favor, selecione um método de pagamento antes de finalizar a compra.",
        confirmButtonText: "Entendi"
      });
      return;
    }

    Swal.fire({
      title: "Compra Finalizada!",
      icon: "success",
      text: "Obrigado pela sua compra!",
      confirmButtonText: "Ok"
    });
  }

  gerarQrCodePix() {
    const request = {
      Metodo: 1,
      Valor: this.total,
    };

    this.http.post('http://localhost:5039/api/pagamento/FormaDePagamento', request, {
      responseType: 'blob',
    }).subscribe(
      (response) => {
        const url = window.URL.createObjectURL(response);
        this.qrCodeBase64 = url;
      },
      (error) => {
        console.error('Erro ao gerar QR Code:', error);
      }
    );
  }
}
