import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LocationPage } from '../location/location';


/**
 * Generated class for the ServiceareaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-servicearea',
  templateUrl: 'servicearea.html',
})
export class ServiceareaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServiceareaPage');
  }

  location() {
    this.navCtrl.push(LocationPage);
  }

  geoLocation() {

  }

}
