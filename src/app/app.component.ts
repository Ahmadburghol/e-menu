import { ViewportScroller } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import data from '../assets/data/products.json';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  categoryList: Category[] = new Array<Category>();
  jsonData = data as Array<any>;
  direction = '';

  selectedCategory: Category | null = null;

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
      let product = new Category(this.jsonData[i]);
      this.categoryList.push(product);
      if (i == 0) this.selectedCategory = this.categoryList[i];
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

  selectCategory(index: any) {
    this.selectedCategory = this.categoryList[index];
  }
}

class Category {
  title: string;
  type: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  label: string;
  items: Product[];

  constructor(category: any = {}) {
    this.title = category.title;
    this.type = category.type;
    this.description = category.description;
    this.price = category.price;
    this.rating = category.rating;
    this.image = category.image;
    this.label = category.arLabel;
    this.items = [];
    if (category.items != null)
      for (var i = 0; i < category.items.length; ++i)
        this.items.push(new Product(category.items[i]));
  }
}

class Product {
  image: string;
  name: string;
  price: number;
  constructor(product: any = {}) {
    this.image = product.image;
    this.name = product.name;
    this.price = product.price;
  }
}
