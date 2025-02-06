import { Component, HostListener } from '@angular/core';

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

  private touchStartX: number = 0;
  private touchEndX: number = 0;
  private isDragging: boolean = false;

  goToImage(index: number) {
    this.currentImageIndex = index;
  }

  nextImage() {
    this.currentImageIndex =
      (this.currentImageIndex + 1) % this.images.length;
  }

  prevImage() {
    this.currentImageIndex =
      (this.currentImageIndex - 1 + this.images.length) % this.images.length;
  }

  // Eventos de toque
  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.touches[0].clientX;
  }

  onTouchMove(event: TouchEvent) {
    this.touchEndX = event.touches[0].clientX;
  }

  onTouchEnd() {
    this.handleSwipe();
  }

  // Eventos de mouse
  onMouseDown(event: MouseEvent) {
    this.isDragging = true;
    this.touchStartX = event.clientX;
  }

  onMouseMove(event: MouseEvent) {
    if (!this.isDragging) return;
    this.touchEndX = event.clientX;
  }

  onMouseUp() {
    if (this.isDragging) {
      this.isDragging = false;
      this.handleSwipe();
    }
  }

  private handleSwipe() {
    if (this.touchStartX - this.touchEndX > 50) {  
      this.nextImage();
    } else if (this.touchEndX - this.touchStartX > 50) {
      this.prevImage();
    }
    this.touchStartX = 0;
    this.touchEndX = 0;
  }
}
