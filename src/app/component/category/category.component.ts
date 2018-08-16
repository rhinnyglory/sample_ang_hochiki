import { Component, OnInit } from '@angular/core';
import { CategoryService } from './category.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  response = [];
  private body= '';
  showLoader = false;
  private category: any = [];
  key: string;
  reverse = false;
  private filePath: string;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  constructor(  private router: Router,
    private categoryService: CategoryService) {  }

    ngOnInit() {
      document.title = 'View Category - Hochiki';
      this.showLoader = true;
    this.getCategory();
  }
  getCategory(): void {
    this.categoryService.getCategoryList().then(response => {
      this.showLoader = false;
      this.category = response.result;
      this.filePath = response.filePath;
    });
  }

}
