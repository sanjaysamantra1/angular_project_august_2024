import { Component } from '@angular/core';
import * as data from './products.json';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = (data as any).default;
  filteredProducts = (data as any).default;

  categories: string[] = [
    "all",
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing"
  ]
  selectedCategory: string = 'all';
  searchText: string = '';

  onSearchTextChange(searchText: string) {
    this.filteredProducts = this.products.filter((product: any) => {
      return JSON.stringify(product).toLocaleLowerCase().includes(searchText.toLowerCase());
    });
  }

  sortProducts(sortOrder: string) {
    if (sortOrder === 'asc') {
      this.filteredProducts.sort((prod1: any, prod2: any) => prod1.price - prod2.price);
    } else {
      this.filteredProducts.sort((prod1: any, prod2: any) => prod2.price - prod1.price);
    }
  }

  handleChange() {
    this.filteredProducts = this.products.filter((prod: any) => prod.category === this.selectedCategory);
  }

  addToCart() {
    // alert('Your Item Got Added To Cart!!')
    Swal.fire('Good job!', 'Your Item got added to cart!!', 'error');
  }
}
