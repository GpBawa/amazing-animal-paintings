import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from 'src/app/models/product';
import { BrowserModule } from "@angular/platform-browser";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:Product[] = [];
  constructor(private productService:ProductService) {}
  ngOnInit(): void {
    this.productService.getProducts().subscribe(data=>{
      this.products = data;
    })
  }


}
