import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(
    //ActivatedRouteは、products のデータとルート情報を組み合わせて、各商品の詳細を表示する
    private route: ActivatedRoute
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
}
