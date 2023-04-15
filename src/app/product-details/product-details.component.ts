import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(
    //ActivatedRouteは、products のデータとルート情報を組み合わせて、各商品の詳細を表示する
    private route: ActivatedRoute,
    //カート内のデータ管理用のサービス
    private cartService: CartService
  ) {}

  //ngOnInitとは、ディレクティブやコンポーネントが変化するタイミングで、コールバックを設定できる仕組み
  //コンポーネント作成後に呼ばれる(コンストラクタではない)
  ngOnInit() {
    //ルートパラメータは、ルートで定義するパス変数に対応
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    //ルートに一致するURLは、productIdを提供します。 Angularは productIdを使用して、それぞれ固有の製品の詳細を表示
    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }

  //addToCart() メソッドは次の3つのことを行います：
  //現在の product を受け取ります。
  //カートサービスの #addToCart() メソッドを使用して商品をカートに追加します。
  //商品がカートに追加されたというメッセージを表示します。
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
