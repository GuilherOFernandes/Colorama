import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CarroselComponent } from './carrosel/carrosel.component'; 
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent,
    CarroselComponent 
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule {}
