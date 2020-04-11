import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Categories } from 'src/app/category/category';
import { CategoryService } from 'src/app/category/services/category.service';
import { NgForm } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-product-add1',
  templateUrl: './product-add1.component.html',
  styleUrls: ['./product-add1.component.css'],
  providers: [ProductService]
})
export class ProductAdd1Component implements OnInit {

  constructor(
    private categoryService:CategoryService,
    private productService:ProductService,
    private alertifyService:AlertifyService
  ) { }
  model : Product = new Product();
  categories: Categories[];

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data=>{
      this.categories = data
    })
  }

  add(form:NgForm) {
    console.log(form.value.name);
    this.productService.addProduct(this.model).subscribe(data => {
      this.alertifyService.success(data.name + " başarıyla eklendi")
    })
  }

}
