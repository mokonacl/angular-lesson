import { HttpClient } from '@angular/common/http';
import { Product } from './products';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  //カートの商品を入れる配列
  items: Product[] = [];

  constructor(private http: HttpClient) {}

  //addToCart()メソッドは、製品を itemsの配列に追加します。
  addToCart(product: Product) {
    this.items.push(product);
  }

  //getItems() メソッドは、ユーザーがカートに追加するアイテムを収集し、各アイテムを関連する数量とともに返します
  getItems() {
    return this.items;
  }

  //clearCart()メソッドはアイテムの空の配列を返し、カートを空にします。
  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }
}
