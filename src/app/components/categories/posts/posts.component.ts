import { Component, Input } from '@angular/core';
import { CategoryModel } from '../../../models/CategoryModel';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { MessageModel } from '../../../models/MessageModel';
import { MessageServiceApi } from '../../../services/MessageServiceApi';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [TableModule, ButtonModule, DialogModule, InputTextModule, FloatLabelModule, FormsModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {

  @Input() selectedCategory!: CategoryModel;

  newPost!: MessageModel;
  visible: boolean = false;

  message: MessageModel = {
    id: null,
    author: '',
    message: '',
    categoryId: null
  };

  constructor(private messageServiceApi: MessageServiceApi) {}

  addMessage(){
    this.message.categoryId = this.selectedCategory.id
    this.messageServiceApi.postCategory(this.message).subscribe(
      (response) => {
        this.message = {
          id: null,
          author: '',
          message: '',
          categoryId: null
        };

        this.selectedCategory.messages.push(response)
        this.visible = false;
      },
      (error) => {
        console.error('Error fetching data', error);
        this.visible = false;
      }
    );

  }

  showDialog() {
    this.visible = true;
  }

  closeDialog() {
    this.message = {
      id: null,
      author: '',
      message: '',
      categoryId: null
    };

    this.visible = false;
  }

}
