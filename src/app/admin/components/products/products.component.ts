import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Product } from 'src/app/contracts/product';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent extends BaseComponent implements OnInit {
  constructor(spinner: NgxSpinnerService, private httpClientService: HttpClientService) {
    super(spinner);
  }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallAtom)
    //HttpClientService deneme kodu
    
    this.httpClientService.get<Product[]>({
      controller: "products"
    }).subscribe(data => console.log(data));

    // this.httpClientService.post({
    //   controller: "products"
    // }, {
    //   name: "kalem",
    //   stock: 100,
    //   price: 15
    // }).subscribe();

    // this.httpClientService.post({
    //   controller: "products"
    // }, {
    //   name: "kağıt",
    //   stock: 1000,
    //   price: 7
    // }).subscribe();

    // this.httpClientService.post({
    //   controller: "products"
    // }, {
    //   name: "silgi",
    //   stock: 500,
    //   price: 4
    // }).subscribe();

    // this.httpClientService.delete({
    //   controller: "products"
    // }, "ef2110a6-b5a9-47ad-af9b-9f3945d52b07")
    // .subscribe();
  }

}
