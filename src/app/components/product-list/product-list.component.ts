import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  productList: Array<Product> = new Array<Product>();

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAll().then((response) => {
      this.productList = response;
    });
  }
}
