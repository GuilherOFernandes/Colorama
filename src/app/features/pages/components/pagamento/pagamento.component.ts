import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.scss']
})
export class PagamentoComponent {
  metodoSelecionado: string = '';
  exibirOpcoesPagamento: boolean = false;
  qrCodeBase64: string | null = null;

  constructor(private http: HttpClient) {}

  mostrarOpcoesPagamento() {
    this.exibirOpcoesPagamento = true;
  }

  selecionarPagamento(metodo: string) {
    this.metodoSelecionado = metodo;
    
    if (metodo === 'pix') {
      this.gerarQrCodePix();  // Para Pix, gerar QR Code
    } else {
      // Para Crédito, Débito e Boleto, exibe o SweetAlert com animação
      Swal.fire({
        title: "Pagamento realizado!",
        icon: "success",
        draggable: true,
        text: `Você escolheu o pagamento via ${metodo}.`,
        showConfirmButton: true,
        confirmButtonText: 'Ok!',
        customClass: {
          confirmButton: 'btn btn-success'
        },
        willClose: () => {
          // Adicionar alguma ação após o SweetAlert se necessário
          console.log(`${metodo} selecionado com sucesso!`);
        }
      });
    }
  }   

  gerarQrCodePix() {
    const request = {
      Metodo: 1,  
      Valor: 90.00,  
    };

    // Envia a requisição POST para o backend
    this.http.post('http://localhost:5039/api/pagamento/FormaDePagamento', request, { responseType: 'blob' })
      .subscribe(response => {
        // Converte o blob para uma URL de objeto para exibir a imagem
        const url = window.URL.createObjectURL(response);
        this.qrCodeBase64 = url; 
        console.log("QR Code gerado com sucesso!");
      }, error => {
        console.error('Erro ao gerar QR Code:', error);
      });
  }
}
