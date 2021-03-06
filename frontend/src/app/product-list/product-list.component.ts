import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ProductModel } from './product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title : String = "Product List";
  //product is the model class for a product item
  products: ProductModel[] = [];
  //image properties
  imageWidth : number = 50;
  imageMargin : number = 2;
  showImage : boolean = false;

  //creating service object for calling getProducts() in product.service.ts
  constructor( private productService : ProductService) { }

  toggleImage():void{
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    //calling getProducts() and loading the products to products array
    this.productService.getProducts()
    .subscribe((data)=>{
      this.products = JSON.parse(JSON.stringify(data));
    })
  }

}
