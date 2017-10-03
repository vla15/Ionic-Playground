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
  category: string;
  limit: number;
  constructor(public navCtrl: NavController, private redditService: RedditService) {
    this.getDefaults();
  }

  getDefaults() {
    if (localStorage.getItem('category') !== null) {
      this.category = localStorage.getItem('category')
    } else {
      this.category = 'sports'
    }

    if (localStorage.getItem('limit') !== null) {
      this.limit = localStorage.getItem('limit')
    } else {
      this.limit = 5
    }
  }

  ionViewWillEnter(): void {
    this.getDefaults();
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
