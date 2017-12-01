import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { CommonProvider } from "../../providers/common/common";
import 'rxjs/add/operator/map';
import { HttpModule, Http, RequestOptions, Headers } from '@angular/http';

/**
 * Generated class for the OngoingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ongoing',
  templateUrl: 'ongoing.html',
  providers: [HttpModule, CommonProvider]
})
export class OngoingPage {
  itemsss: any;
  itemss: any;
  items: any;
  id: string;
  itemssss:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public common: CommonProvider, public http: Http,
    public toastCtrl: ToastController) {
    this.id = localStorage.getItem('user_id');
    this.list_active();
//    this.list_completed();
//    this.list_cancelled();
//    this.list_distributed();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OngoingPage');
    //  this.list();
  }

  list_active() {
    console.log(this.common.options);
    var options = this.common.options;

    var data_form = {
      uid: this.id,
      status: '1'
    }
    console.log(data_form);

    // alert(JSON.stringify(data_form));
    var Serialized = this.common.serializeObj(data_form);
    console.log(Serialized);
    // alert(JSON.stringify(Serialized));
    console.log(data_form);

    this.http.post(this.common.base_url + 'orders/requestlist', Serialized, options)
      .map(res => res.json())
      .subscribe(sdata => {
        // alert('api');
        console.log(sdata);
        if (sdata.status == true) {
          // alert('true')
          this.items = sdata.data;
          console.log(this.items);
          console.log(this.items.OrderItem);

        }
        else {
          console.log(sdata.msg);

           let toast = this.toastCtrl.create({
             message: sdata.msg,
             duration: 2000,
             position: 'middle'
           });
           toast.present();
        }


      }, error => {
        // console.log(sdata.msg);

      });

  }

  list_completed() {
    console.log(this.common.options);
    var options = this.common.options;

    var data_form = {
      uid: this.id,
      status: '2'
    }
    console.log(data_form);

    // alert(JSON.stringify(data_form));
    var Serialized = this.common.serializeObj(data_form);
    console.log(Serialized);
    // alert(JSON.stringify(Serialized));
    console.log(data_form);

    this.http.post(this.common.base_url + 'orders/requestlist', Serialized, options)
      .map(res => res.json())
      .subscribe(sdata => {
        // alert('api');
        console.log(sdata);
        if (sdata.status == true) {
          // alert('true')
          this.itemss = sdata.data;
          console.log(this.itemss);
          console.log(this.itemss.OrderItem);

        }
        else {
          console.log(sdata.msg);

          let toast = this.toastCtrl.create({
             message: sdata.msg,
             duration: 2000,
             position: 'middle'
           });
           toast.present();
        }


      }, error => {
        // console.log(sdata.msg);

      });

  }

  list_cancelled(){
    console.log(this.common.options);
    var options = this.common.options;

    var data_form = {
      uid: this.id,
      status: '3'
    }
    console.log(data_form);

    // alert(JSON.stringify(data_form));
    var Serialized = this.common.serializeObj(data_form);
    console.log(Serialized);
    // alert(JSON.stringify(Serialized));
    console.log(data_form);

    this.http.post(this.common.base_url + 'orders/requestlist', Serialized, options)
      .map(res => res.json())
      .subscribe(sdata => {
        // alert('api');
        console.log(sdata);
        if (sdata.status == true) {
          // alert('true')
          this.itemsss = sdata.data;
          console.log(this.itemsss);
          console.log(this.itemsss.OrderItem);

        }
        else {
          console.log(sdata.msg);

          let toast = this.toastCtrl.create({
             message: sdata.msg,
             duration: 2000,
             position: 'middle'
           });
           toast.present();
        }


      }, error => {
        // console.log(sdata.msg);

      });
  }
  
  list_distributed(){
      
      console.log(this.common.options);
    var options = this.common.options;

    var data_form = {
      uid: this.id,
      status: '4'
    }
    console.log(data_form);

    // alert(JSON.stringify(data_form));
    var Serialized = this.common.serializeObj(data_form);
    console.log(Serialized);
    // alert(JSON.stringify(Serialized));
    console.log(data_form);

    this.http.post(this.common.base_url + 'orders/requestlist', Serialized, options)
      .map(res => res.json())
      .subscribe(sdata => {
        // alert('api');
        console.log(sdata);
        if (sdata.status == true) {
          // alert('true')
          this.itemsss = sdata.data;
          console.log(this.itemssss);
          console.log(this.itemssss.OrderItem);

        }
        else {
          console.log(sdata.msg);

          let toast = this.toastCtrl.create({
             message: sdata.msg,
             duration: 2000,
             position: 'middle'
           });
           toast.present();
        }


      }, error => {
        // console.log(sdata.msg);

      });
      
  }

}
