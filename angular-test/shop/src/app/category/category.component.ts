import { Component, OnInit } from '@angular/core';
import { Categories } from './category';
import { CategoryService } from './services/category.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(
    private categoryService:CategoryService
  ) { }
  title:string = "Kategoriler"
  categories:Categories[];

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data=>{
      this.categories = data
    })
  }

}
