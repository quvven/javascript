import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../product';
import { CategoryService } from 'src/app/category/services/category.service';
import { Categories } from 'src/app/category/category';
import { ProductService } from '../services/product.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-product-add2',
  templateUrl: './product-add2.component.html',
  styleUrls: ['./product-add2.component.css'],
  providers: [ProductService]
})
export class ProductAdd2Component implements OnInit {

  constructor(
    private formBuilder:FormBuilder,
    private categoryService:CategoryService,
    private productService:ProductService,
    private alertifyService:AlertifyService
  ) { }

  productAddForm:FormGroup;
  product:Product = new Product();
  categories:Categories[];

  ngOnInit(): void {
    this.createProductAddForm();
    this.categoryService.getCategories().subscribe(data=>{
      this.categories = data
    })
  }

  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      name:["", Validators.required],
      description:["", Validators.required],
      price:["", Validators.required],
      img:["", Validators.required],
      categoryId:["", Validators.required],
    })
  }

  add() {
    if(this.productAddForm.valid) {
      this.product = Object.assign({}, this.productAddForm.value)
    }
    this.productService.addProduct(this.product).subscribe(data => {
      this.alertifyService.success(data.name + " başarıyla eklendi")
    })
  }

}
