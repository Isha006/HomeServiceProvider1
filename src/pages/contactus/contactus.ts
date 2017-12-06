import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { ChatPage } from "../chat/chat";
import { SocialSharing } from '@ionic-native/social-sharing';

/**
 * Generated class for the ContactusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contactus',
  templateUrl: 'contactus.html',
})
export class ContactusPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private socialSharing: SocialSharing) {
  }
  
   back(){
       this.navCtrl.push(MenuPage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactusPage');
  }
  
  chat(){
      this.navCtrl.push(ChatPage);
  }
  
  maIl(){
      this.socialSharing.canShareViaEmail().then(() => {
//  alert('Sharing via email is possible');
}).catch(() => {
//  alert('Sharing via email is not possible');
});

// Share via email
this.socialSharing.shareViaEmail('Hello', 'CONTACT', ['rupak@avainfotech.com']).then(() => {
  alert( 'Email Successfully sent!');
}).catch(() => {
  // Error!
  alert( 'Error!');
});
  }

}
