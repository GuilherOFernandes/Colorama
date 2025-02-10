import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeModule } from './features/home/home.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductsComponent } from './features/products/products.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ModalComponent} from './shared/component/modal/modal.component'
import { OrdersComponent } from './features/orders/orders.component';
import { OrdersService } from './features/orders/orders.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    ModalComponent,
    OrdersComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    HomeModule,
    ModalModule.forRoot(),
    RouterModule,
    NgbModule,
    NgbTooltipModule,
  ],
  providers: [BsModalService,OrdersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
