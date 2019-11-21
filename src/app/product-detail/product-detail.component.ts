import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product_detail;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
    ) { }

  ngOnInit() {    
    this.route.paramMap.subscribe(params => {
    this.product_detail = products[+params.get('productId')];
  });
  }

  addToCart(product_detail){
    window.alert('Product has been added to the cart');
    this.cartService.addToTheCart(product_detail);
  }

}