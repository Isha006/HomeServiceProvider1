import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { CommonProvider } from "../../providers/common/common";
import 'rxjs/add/operator/map';
import { HttpModule, Http, RequestOptions, Headers } from '@angular/http';
/**
 * Generated class for the VerifyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-verify',
  templateUrl: 'verify.html',
  providers: [HttpModule, CommonProvider]
})
export class VerifyPage {
  users: any;
user_id: any;
phone: any;
  public data: any = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public common: CommonProvider, public http: Http,
    public toastCtrl: ToastController) {
        this.user_id = localStorage.getItem('user_id');
        this.phone=localStorage.getItem('PhoneNumber');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerifyPage');
    this.data = {
      otp:'1234'
    }
  }

  profile(signin)
  {
  	console.log(this.common.options);
    var options = this.common.options;

    var data_form = {
      otp: signin.value.otp,
      phone: this.phone
    }
    console.log(data_form);

    // alert(JSON.stringify(data_form));
    var Serialized = this.common.serializeObj(data_form);
    console.log(Serialized);
    // alert(JSON.stringify(Serialized));
    console.log(data_form);

    this.http.post(this.common.base_url + 'users/otpverify', Serialized, options)
      .map(res => res.json())
      .subscribe(sdata => {
        console.log(sdata);
        if (sdata.status == true) {
          this.users = sdata.data.User;
          console.log(this.users);
          localStorage.clear();
          
          localStorage.setItem('user_id',sdata.data.User.id);
          localStorage.setItem('Name',sdata.data.User.name);
          localStorage.setItem('Image',sdata.data.User.image);
          localStorage.setItem('PhoneNumber',sdata.data.User.phonenumber);
          
          
          let toast = this.toastCtrl.create({
            message: sdata.msg,
            duration: 3000,
            position: 'middle'
          });
          toast.present();

          this.navCtrl.push(TabsPage);
        }
        else{
          console.log(sdata.msg);
          alert('else');
          let toast = this.toastCtrl.create({
            message: sdata.msg,
            duration: 3000,
            position: 'middle'
          });
          toast.present();
        }


      }, error => {
        // console.log(sdata.msg);

      });

  }

}
