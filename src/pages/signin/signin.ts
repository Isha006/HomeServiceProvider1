import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { VerifyPage } from '../verify/verify';
import { CommonProvider } from "../../providers/common/common";
import 'rxjs/add/operator/map';
import { HttpModule, Http, RequestOptions, Headers } from '@angular/http';
import { SignupPage } from "../signup/signup";

/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
  providers: [HttpModule, CommonProvider]
})
export class SigninPage {

   public data: any = '';
   phone: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public common: CommonProvider, public http: Http,
    public toastCtrl: ToastController) {
        this.phone=localStorage.getItem('PhoneNumber');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }

  verify(phn){
//    this.navCtrl.push(VerifyPage);
    
    console.log(this.common.options);
    var options = this.common.options;

    var data_form = {
      number: phn.value.phone
    }
    console.log(data_form);

    //  alert(JSON.stringify(data_form));
    var Serialized = this.common.serializeObj(data_form);
    console.log(Serialized);
    //  alert(JSON.stringify(Serialized));
    console.log(data_form);

    this.http.post(this.common.base_url + 'users/getotp', Serialized, options)
      .map(res => res.json())
      .subscribe(sdata => {
        console.log(sdata);
        // alert('api');
        if (sdata.status == true) {
          // alert('true');
//          this.users = sdata.data.User;
          console.log('true');
          localStorage.setItem('PhoneNumber',phn.value.phone);
          console.log(phn.value.phone);

          let toast = this.toastCtrl.create({
            message: sdata.msg,
            duration: 3000,
            position: 'middle'
          });
          toast.present();

          this.navCtrl.push(VerifyPage);
        }
        else{
          console.log(sdata.msg);
          
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

  back(){
    this.navCtrl.push(SignupPage);
  }

  }
