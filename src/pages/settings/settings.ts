import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RedditService } from '../../app/services/reddit.service';
import { RedditsPage } from '../reddits/reddits';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  category: string;
  limit: number;
  constructor(public navCtrl: NavController, private redditService: RedditService) {
    this.getDefaults()
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

  setDefaults(): void {
    localStorage.setItem('category', this.category)
    localStorage.setItem('limit', this.limit)
    this.navCtrl.push(RedditsPage)
  }

}
