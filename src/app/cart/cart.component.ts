import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  //商品を格納するitem
  items = this.cartService.getItems();

  constructor(private cartService: CartService) {}
}
