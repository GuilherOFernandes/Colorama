import { Component, OnInit } from '@angular/core'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  etapa: number = 1; // Controle da etapa do formulário
  dadosPessoaisForm: FormGroup;
  enderecoForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    // Formulário de Dados Pessoais
    this.dadosPessoaisForm = this.fb.group({
      nome: ['', Validators.required],
      cpf: ['', [Validators.required, Validators.pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
      telefone: ['', [Validators.required, Validators.pattern(/^\(\d{2}\) \d{4,5}-\d{4}$/)]],
      dataDeNascimento: ['', Validators.required]
    });

    // Formulário de Endereço
    this.enderecoForm = this.fb.group({
      cep: ['', [Validators.required, Validators.pattern(/^\d{5}-?\d{3}$/)]],
      rua: [{ value: '', disabled: true }],
      bairro: [{ value: '', disabled: true }],
      cidade: [{ value: '', disabled: true }],
      estado: [{ value: '', disabled: true }],
      numero: ['', Validators.required],
      complemento: ['']
    });
  }

  ngOnInit(): void {}

  buscarCEP() {
    let cep = this.enderecoForm.get('cep')?.value.replace('-', '');  // Remover traços do CEP
    if (cep && cep.length === 8) {
      this.http.get(`https://viacep.com.br/ws/${cep}/json/`).subscribe(
        (data: any) => {
          if (data.erro) {
            alert('CEP não encontrado!');
          } else {
            this.enderecoForm.patchValue({
              rua: data.logradouro,
              bairro: data.bairro,
              cidade: data.localidade,
              estado: data.uf
            });
          }
        },
        () => {
          alert('Erro ao consultar o CEP.');
        }
      );
    } else {
      alert('Digite um CEP válido!');
    }
  }

  proximaEtapa() {
    this.etapa = 2; // Avança para a próxima etapa (endereço)
  }

  voltarEtapa() {
    this.etapa = 1;
  }

  cadastrar() {
    console.log('Formulário de Dados Pessoais:', this.dadosPessoaisForm.valid);
    console.log('Formulário de Endereço:', this.enderecoForm.valid);

    // Verificar o status de cada campo do formulário de Dados Pessoais
    Object.keys(this.dadosPessoaisForm.controls).forEach(field => {
      const control = this.dadosPessoaisForm.get(field);
      if (control?.valid) {
        console.log(`${field} está preenchido corretamente:`, control.value);
      } else {
        console.log(`${field} está incorreto. Erro(s):`, control?.errors);
      }
    });

    // Verificar o status de cada campo do formulário de Endereço
    Object.keys(this.enderecoForm.controls).forEach(field => {
      const control = this.enderecoForm.get(field);
      if (control?.valid) {
        console.log(`${field} está preenchido corretamente:`, control.value);
      } else {
        console.log(`${field} está incorreto. Erro(s):`, control?.errors);
      }
    });

    if (this.dadosPessoaisForm.valid && this.enderecoForm.valid) {
      // Tratar o CEP para ser um número
      const cep = this.enderecoForm.get('cep')?.value.replace('-', '').replace(' ', ''); // Remover traços e espaços
      const cepNum = Number(cep); // Garantir que seja um número

      const dadosCliente = {
        nome: this.dadosPessoaisForm.get('nome')?.value,
        cpf: this.dadosPessoaisForm.get('cpf')?.value,
        email: this.dadosPessoaisForm.get('email')?.value,
        senha: this.dadosPessoaisForm.get('senha')?.value,
        telefone: this.dadosPessoaisForm.get('telefone')?.value,
        dataDeNascimento: this.dadosPessoaisForm.get('dataDeNascimento')?.value,
        // Passar os dados de endereço diretamente, sem objeto aninhado
        endereco: this.enderecoForm.get('rua')?.value,  // Endereço como uma string
        numero: this.enderecoForm.get('numero')?.value,
        complemento: this.enderecoForm.get('complemento')?.value,
        cep: cepNum,  // Passar o CEP como número
        cidade: this.enderecoForm.get('cidade')?.value,
        estado: this.enderecoForm.get('estado')?.value
      };

      console.log('Dados do Cliente:', dadosCliente);

      // Enviar os dados para a API do backend
      this.http.post('http://localhost:5039/api/Usuario/CadastrarCliente', dadosCliente)
        .subscribe(
          (response) => {
            console.log('Cadastro realizado com sucesso!', response);
            alert('Cadastro realizado com sucesso!');
            // Redirecionar para a página de login ou outra página
            this.router.navigate(['/login']);
          },
          (error) => {
            console.error('Erro ao cadastrar:', error);
            alert('Erro ao realizar cadastro. Tente novamente.');
          }
        );
    } else {
      alert('Por favor, preencha todos os campos corretamente!');
    }
  }
}
