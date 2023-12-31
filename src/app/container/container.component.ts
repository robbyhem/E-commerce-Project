import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  //name = "John Doe"
  /*addToCart: number = 0
  product = {
    name: "iphone X",
    price:  1447,
    colour: "Blue",
    discount: 8.5,
    inStock: 10,
    pImage: "assets/images/iphone14.png",
  }

  getDiscountPrice(){
    return this.product.price - (this.product.price * this.product.discount / 100)
  }

  //event binding
  onNameChange(event: any){
    //this.name = event.target.value
    //console.log(event.target.value)
  }

  increamentValue(){
    if (this.addToCart < this.product.inStock){
      this.addToCart++
    }
  }

  decreamentValue(){
    if (this.addToCart > 0){
      this.addToCart--
    }
  }*/

  @ViewChild('productListComponent') productListComponent: ProductListComponent

  stringArr: string[] = ["Mark", "Mary", "Steve", "Sarah"];

  searchText: string = ""

  setSearchText(value: string){
    this.searchText = value
  }
}
