export class MessageModel {

  id: number | null;
  message: string;
  author: string;
  categoryId: number | null;

  constructor(id: number, message: string, author: string, categoryId: number) {
    this.id = id;
    this.message = message;
    this.author = author;
    this.categoryId = categoryId;
  }
}
