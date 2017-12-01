import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TermsofusePage } from '../termsofuse/termsofuse';
import { ReviewsPage } from '../reviews/reviews';
import { ContactusPage } from '../contactus/contactus';
import { SigninPage } from "../signin/signin";
/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

termsofuse()
{
	this.navCtrl.push(TermsofusePage);
}

reviews()
{
	this.navCtrl.push(ReviewsPage);
}
contactus()
{
	this.navCtrl.push(ContactusPage);
}

logOut(){
  alert('Logging you out');
    localStorage.clear();
    this.navCtrl.push(SigninPage);
}


}
