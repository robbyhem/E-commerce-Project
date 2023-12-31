import { Component, Input } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { Product } from 'src/app/Models/Product';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  @Input() productListComp: ProductListComponent =undefined

  product: Product

  ngOnInit(){
    this.product = this.productListComp.selectedProduct
  }
}
