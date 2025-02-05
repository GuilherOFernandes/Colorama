import { Component } from '@angular/core';
import { ProductsComponent } from '../products.component';

@Component({
  selector: 'app-ferragens',
  templateUrl: './ferragens.component.html',
  styleUrls: ['./ferragens.component.scss']
})
export class FerragensComponent {
products = [
  { name: 'Cor e Proteção Ferragem', category: 'Ferragem', image: 'assets/images/168650-800-800.png' },
  { name: 'Fosco Absoluto Acrílica', category: 'Acrílica', image: 'assets/images/tinta_esmalte_contra_ferrugem_preto_brilho_3_6l_suvinil_158273_1_86ac7cbda77f12415c70f96a2e45899a.webp' },
]
ferragemProducts = new ProductsComponent().products.filter((product: { category: string; }) => product.category === 'Ferragem');
}
