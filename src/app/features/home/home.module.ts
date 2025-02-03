import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CarroselComponent } from './carrosel/carrosel.component'; // Importe o CarroselComponent

@NgModule({
  declarations: [
    HomeComponent,
    CarroselComponent // Declare os componentes do módulo Home
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent // Exporte o HomeComponent para ser usado em outros módulos
  ]
})
export class HomeModule {}
