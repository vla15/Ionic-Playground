import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RedditsPage } from '../reddits/reddits';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  category: string;
  limit: number;
  constructor(public navCtrl: NavController) {
    this.getDefaults()
  }
  getDefaults() {
    if (localStorage.getItem('category') !== null) {
      this.category = localStorage.getItem('category')
    } else {
      this.category = 'sports'
    }

    if (localStorage.getItem('limit') !== null) {
      this.limit = parseInt(localStorage.getItem('limit'), 10)
    } else {
      this.limit = 5
    }
  }

  setDefaults(): void {
    localStorage.setItem('category', this.category)
    localStorage.setItem('limit', this.limit)
    this.navCtrl.setRoot(RedditsPage)
  }

}
