export class CategoryModel {

  id: number | null;
  name: string;
  messages: Array<string> = [];

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
