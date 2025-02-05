import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { OrdersComponent } from './features/orders/orders.component';
import { ProductsComponent } from './features/products/products.component';
import { SolventesComponent } from './features/products/solventes/solventes.component';
import { FerragensComponent } from './features/products/ferragens/ferragens.component';
import { AcrilicaComponent } from './features/products/acrilica/acrilica.component';
import { MateriaisPinturaComponent } from './features/products/materiais-pintura/materiais-pintura.component';
import { EquipamentosProtecaoComponent } from './features/products/equipamentos-protecao/equipamentos-protecao.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'products', component: ProductsComponent, children:[
    { path: 'products/ferragens', component: FerragensComponent },
    { path: 'acrilica', component: AcrilicaComponent },
    { path: 'solventes', component: SolventesComponent },
    { path: 'materiais-pintura', component: MateriaisPinturaComponent },
    { path: 'equipamentos-protecao', component: EquipamentosProtecaoComponent },
  ],
 },
 { path: '', redirectTo: '/products', pathMatch: 'full' }, // Rota padrão
 { path: '**', redirectTo: '/products' }, // Rota para evitar erros 404
 { path: 'orders', component: OrdersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
