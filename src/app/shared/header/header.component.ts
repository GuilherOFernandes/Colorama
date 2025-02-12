import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menuOpen = false;
  isLoggedIn = false;

  constructor(private router: Router) {}

  ngOnInit() {
    // Verifica se o usuário está logado ao carregar o header
    this.checkLoginStatus();

    // Ouve mudanças no localStorage (detecta login e logout)
    window.addEventListener('storage', () => {
      this.checkLoginStatus();
    });
  }

  checkLoginStatus() {
    this.isLoggedIn = localStorage.getItem('user') ? true : false;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  logout() {
    localStorage.removeItem('user');
    this.isLoggedIn = false;
    this.router.navigate(['/login']);

    // Dispara evento para atualizar o header
    window.dispatchEvent(new Event('storage'));
  }
}