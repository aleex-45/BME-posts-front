import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { CategoryModel } from "../models/CategoryModel";

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceApi {

  constructor(private http: HttpClient){}

  getAll(): Observable<any>{
    return this.http.get('http://localhost:8080/api/category/all');
  }

  postCategory(category: CategoryModel): Observable<any>{
    return this.http.post('http://localhost:8080/api/category', category);
  }

}
