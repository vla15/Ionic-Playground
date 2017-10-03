import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { SettingsPage } from '../contact/contact';
import { RedditsPage } from '../reddits/reddits';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = RedditsPage;
  tab2Root = AboutPage;
  tab3Root = SettingsPage;

  constructor() {

  }
}
