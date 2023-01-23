import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html'
})

export class CarouselComponent {
  @Input()
  images: string[] = [];
  @Input()
  captions: string[] = [];
  @Input()
  links: string[] = [];

  currentIndex = 0;

  previous() {
    if (this.currentIndex === 0) {
      this.currentIndex = this.images.length - 1;
    } else {
      this.currentIndex--;
    }
  }

  next() {
    if (this.currentIndex === this.images.length - 1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }
  }
}