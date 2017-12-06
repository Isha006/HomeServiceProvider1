import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { SMS } from '@ionic-native/sms';

/**
 * Generated class for the ReviewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reviews',
  templateUrl: 'reviews.html',
})
export class ReviewsPage {

phone: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private sms: SMS) {
      this.phone=localStorage.getItem('PhoneNumber');
//      alert(this.phone);
  }
  
  back(){
       this.navCtrl.push(MenuPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReviewsPage');
  }
  
  sMs(){
//      this.sms.send(this.phone, 'Hello world!');
//alert(this.phone);
      this.sms.send('+919056691461', 'Hello world!');
  }

    whatsApp(){
        
    }
}
