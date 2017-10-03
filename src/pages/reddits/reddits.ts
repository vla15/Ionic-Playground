import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { RedditService } from '../../app/services/reddit.service';
import { RedditDetailsPage } from '../reddit-details/reddit-details';

@IonicPage()
@Component({
  selector: 'page-reddits',
  templateUrl: 'reddits.html',
})
export class RedditsPage {
  reddits: any[] = [];
  category: string = 'food';
  limit: number = 5;
  constructor(public navCtrl: NavController, private redditService: RedditService) {
  }

  ionViewDidLoad(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.redditService.getPosts(this.category, this.limit).subscribe(response => {
      this.reddits = response.data.children
      })
  }

  viewItem(reddit:any): void {
    this.navCtrl.push(RedditDetailsPage, {
      reddit: reddit
    })
  }
}
