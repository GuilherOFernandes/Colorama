import { Component, OnInit, TemplateRef } from '@angular/core';
import { ProductsService } from './products.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalComponent } from 'src/app/shared/component/modal/modal.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  standalone: false,
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  bsModalRef!: BsModalRef;
  linksCategory = [
    {
      label: 'Ferragem',
    },
    {
      label: 'Acrilica',
    },
    {
      label: 'Solventes',
    },
    {
      label: 'Material de Pintura',
    },
    {
      label: 'Equipamento de Proteção',
    },
  ];

  constructor(
    private productsService: ProductsService,
    private modalServices: BsModalService
  ) {}

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

  filterProducts(categoryName:string){
    console.log(categoryName);
    this.products = this.productsService.filterProductsBy(categoryName);

  }

  openModal(product: any): void {
    // Abre o modal e passa as informações do produto selecionado
    this.bsModalRef = this.modalServices.show(ModalComponent, {
      initialState: {
        title: product.name,
        iconTemplate: 'bi bi-box',
        product, // Passa o produto completo
      },
      class: 'modal-lg',
    });
  }
  selectedProduct: any = null;
}
