import { Component } from '@angular/core';
import { CategoryServiceApi } from '../../services/CategoryServiceApi';
import { CategoryModel } from '../../models/CategoryModel';
import { PostsComponent } from './posts/posts.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [PostsComponent, ButtonModule, InputTextModule, FormsModule, FloatLabelModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent {
  categories: CategoryModel[] = [];
  selectedCategory: CategoryModel = this.categories[0];
  showPosts: boolean = false;

  visible: boolean = false;

  newCategory: CategoryModel = {
    id: null,
    name: '',
    messages: []
  }

  constructor(private categoryServiceApi: CategoryServiceApi) {}

  ngOnInit(): void {
    this.categoryServiceApi.getAll().subscribe(
      (response) => {
        this.categories = response;
      },
      (error) => {
        console.error('Error fetching data', error);
      }
    );
  }

  changeCategory(category: CategoryModel) {
    this.selectedCategory = category;
    this.showPosts = true
  }

  addCategory(){
    this.categoryServiceApi.postCategory(this.newCategory).subscribe(
      (response) => {
        this.newCategory = {
          id: null,
          name: '',
          messages: []
        }

        this.categories.push(response)
        this.visible = false;
      },
      (error) => {
        console.error('Error fetching data', error);
        this.visible = false;
      });
  }

  showDialog() {
    this.visible = true;
  }

  closeDialog() {
    this.newCategory = {
      id: null,
      name: '',
      messages: []
    }

    this.visible = false;
  }

}
