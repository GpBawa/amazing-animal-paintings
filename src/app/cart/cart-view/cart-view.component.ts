import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {
  totalPrice:number = 0;
  cartItems: Product[] = [];
  constructor(private cartService: CartService) { }
  ngOnInit(): void {
    this.cartService.getCartItems().subscribe(data => {
      this.cartItems = data;
      this.totalPrice = this.getTotalPrice();
    })
  }
  getTotalPrice():number {
    let total = 0;
    for(let item of this.cartItems) {
      total += item.price;
    }
    return total;
  }

  clearCart():void {
    this.cartService.clearCart().subscribe();
  }

  checkOut():void {
    this.cartService.checkout(this.cartItems).subscribe();
  }


}
