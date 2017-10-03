import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class RedditService {
  baseUrl: string;

  constructor(public http: Http) {
    this.baseUrl = 'https://www.reddit.com/r';
  }

  getPosts(category: string, limit: number) {
    return this.http.get(this.baseUrl + '/' + category + '/top.json?limit=' + limit)
      .map(res => res.json())
  }
}