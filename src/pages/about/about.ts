import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PostService } from '../../app/services/post.service';
import { Post } from '../../models/post';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  posts: Post[];

  constructor(public navCtrl: NavController, public postService: PostService) {
    this.postService.getPosts()
      .subscribe(posts => this.posts = posts)
  }
}
