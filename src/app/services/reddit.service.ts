import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';

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

  handleError(error: any): any {
    console.error(error)
    let message = `Error Status Code: ${error.status} at ${error.url}`;
    return Observable.throw(message);
  }
}