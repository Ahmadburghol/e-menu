import { ViewportScroller } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import data from '../assets/data/products.json';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  productList: Product[] = new Array<Product>();
  jsonData = data as Array<any>;
  direction = '';

  public isCollapsed = false;

  isNavCollapse = false;
  @HostListener('window:scroll', []) onScroll() {
    if (this.scroll.getScrollPosition()[1] > 70) {
      this.isNavCollapse = true;
    } else {
      this.isNavCollapse = false;
    }
  }

  constructor(private scroll: ViewportScroller) {}

  ngOnInit() {
    for (let i = 0; i < this.jsonData.length; i++) {
      let product = new Product(this.jsonData[i]);
      this.productList.push(product);
    }
  }

  onWheel(event: WheelEvent): void {
    if (event.deltaY > 0) this.scrollToRight();
    else this.scrollToLeft();
  }

  scrollToLeft(): void {
    document.getElementById('scroll-1').scrollLeft -= 400;
  }

  scrollToRight(): void {
    document.getElementById('scroll-1')!.scrollLeft += 400;
  }
}

class Product {
  title: string;
  type: string;
  description: string;
  price: number;
  rating: number;
  image: string;

  constructor(product: any = {}) {
    this.title = product.title;
    this.type = product.type;
    this.description = product.description;
    this.price = product.price;
    this.rating = product.rating;
    this.image = product.image;
  }
}
