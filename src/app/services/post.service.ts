import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Post } from '../../models/post';

@Injectable()
export class PostService {
  baseUrl: string = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: Http) {}

  getPosts(): Observable<Post[]> {
    return this.http.get(this.baseUrl)
      .map(response => response.json())
  }
}