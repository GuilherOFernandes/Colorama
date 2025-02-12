import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private router: Router) {}

  login() {
    // Simula o login bem-sucedido
    localStorage.setItem('user', 'true'); // Salva estado de login
    this.router.navigate(['/products']); // Redireciona para produtos

    // Dispara evento para atualizar o header
    window.dispatchEvent(new Event('storage'));
  }
}