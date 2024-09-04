import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { CategoryModel } from "../models/CategoryModel";
import { MessageModel } from "../models/MessageModel";

@Injectable({
  providedIn: 'root'
})
export class MessageServiceApi {

  constructor(private http: HttpClient){}

  postCategory(message: MessageModel): Observable<any>{
    return this.http.post('http://localhost:8080/api/message', message);
  }

}
