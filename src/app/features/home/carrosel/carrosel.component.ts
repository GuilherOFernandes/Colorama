import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carrosel.component.html',
  styleUrls: ['./carrosel.component.scss'],
})
export class CarroselComponent {
  images: string[] = [
    'assets/images/1736163329_tintas.webp',
    'assets/images/banner site entrega 1.png',
    'assets/images/b1286c162234acf6b9d1c1264b60f691.jpg'
  ];
  currentImageIndex: number = 0;

  goToImage(index: number) {
    this.currentImageIndex = index;
  }
}
