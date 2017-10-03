import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RedditDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reddit-details',
  templateUrl: 'reddit-details.html',
})
export class RedditDetailsPage {
  reddit: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.reddit = this.navParams.get('reddit')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RedditDetailsPage');
  }

}
