import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Posts} from "../interfaces/posts.interface";

@Injectable({
  providedIn: 'root'
})
export class PostsService {


  private apiURL = 'https://jsonplaceholder.typicode.com/posts'

  constructor( private http: HttpClient) { }

  getPostsData(): Observable<Posts[]>{
    return this.http.get<Posts[]>(this.apiURL)
  }
}
