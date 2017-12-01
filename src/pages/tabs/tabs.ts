import { Component } from '@angular/core';
import { ProfilePage } from '../profile/profile';
import { MenuPage } from '../menu/menu';
import { OngoingPage } from '../ongoing/ongoing';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = OngoingPage;
  tab2Root = ProfilePage;
  tab3Root = MenuPage;

  constructor() {

  }
}
