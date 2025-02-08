import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    ModalComponent
  ],
  imports: [
    ModalModule.forRoot(),
    NgbTooltipModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    NgbModule,
    BrowserAnimationsModule,
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
