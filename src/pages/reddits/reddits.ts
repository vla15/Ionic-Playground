import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { RedditService } from '../../app/services/reddit.service';

@IonicPage()
@Component({
  selector: 'page-reddits',
  templateUrl: 'reddits.html',
})
export class RedditsPage {
  reddits: any[] = [];
  constructor(public navCtrl: NavController, private redditService: RedditService) {
  }

  ionViewDidLoad(): void {
    this.getPosts('sports', 5)
  }

  getPosts(subject: string, limit: number) {
    this.redditService.getPosts(subject, limit).subscribe(response => {
      this.reddits = response.data.children
      })
  }
}
