import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from '../product-list/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  title:String = "Add Product";

  constructor(private productService : ProductService , private router : Router) { }

  productItem = new ProductModel("","","","","","","","");

  ngOnInit(): void {
  }
  
  AddProduct(){
    this.productService.newProduct(this.productItem);
    console.log("called");
    alert("success");
    this.router.navigate(['/']); //redirect to home page
  }
}
