import { Component, Input } from '@angular/core';
import { Product } from './../../Models/Product';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  selectedProduct: Product;
  products = [
    {
      id: 1,
      name: "Nike React Infinity Run Flyknit",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      brand: "NIKE",
      gender: "Men",
      category: "Running",
      size: [6, 7, 8, 9, 10],
      color: ["Black", "White", "Blue"],
      price: 160,
      discountPrice: 140,
      is_in_inventory: true,
      items_left: 4,
      imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-665455a5-45de-40fb-945f-c1852b82400d/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg",
      slug: "nike-react-infinity-run-flyknit"
    },
    {
      id: 2,
      name: "Nike React Miler",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      brand: "NIKE",
      gender: "Men",
      category: "Running",
      size: [6, 7, 8, 9, 10],
      color: ["Black", "White", "Blue"],
      price: 130,
      is_in_inventory: false,
      items_left: 3,
      imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-5cc7de3b-2afc-49c2-a1e4-0508997d09e6/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg",
      slug: "nike-react-infinity-miler"
    },
    {
      id: 3,
      name: "Nike Air Zoom Pegasus 37",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      brand: "NIKE",
      gender: "Women",
      category: "Running",
      size: [6, 7, 8, 9, 10],
      color: ["Black", "Black", "Blue", "Brown", "Red"],
      price: 120,
      is_in_inventory: true,
      items_left: 6,
      imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-33b0a0a5-c171-46cc-ad20-04a768703e47/air-zoom-pegasus-womens-running-shoes-zX42Nc.jpg",
      slug: "nike-air-zoom-pegasus-37"
    },
    {
      id: 4,
      name: "Nike Joyride Run Flyknit",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      brand: "NIKE",
      gender: "Womenen",
      category: "Running",
      size: [6, 7, 8, 9, 10],
      color: ["White", "Brown", "Red"],
      price: 180,
      is_in_inventory: true,
      items_left: 3,
      imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-99a7d3cb-e40c-4474-91c2-0f2e6d231fd2/joyride-run-flyknit-womens-running-shoes-zX42Nc.jpg",
      slug: "nike-joyride-run-flyknit"
    }
  ];

  totalProductCount = this.products.length
  totalProductInStock = this.products.filter(p => p.is_in_inventory == true).length;
  totalProductOutOfStock = this.products.filter(p => p.is_in_inventory == false).length;

  onFilterChanged(value: string){
    console.log(value)
    this.selectedFilterRadioButton = value
  }

  selectedFilterRadioButton: string = "all"

  @Input()
  searchText: string = ""
}
