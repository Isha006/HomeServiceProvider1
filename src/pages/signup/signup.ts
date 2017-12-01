import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { SigninPage } from '../signin/signin';
import { CommonProvider } from "../../providers/common/common";
import 'rxjs/add/operator/map';
import { HttpModule, Http, RequestOptions, Headers } from '@angular/http';
import { VerifyPage } from "../verify/verify";

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  providers: [HttpModule, CommonProvider]
})
export class SignupPage {

  users: any;
  public data: any = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public common: CommonProvider, public http: Http,
    public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signin() {
    this.navCtrl.push(SigninPage);
  }

  signup_form(signup) {

    console.log(this.common.options);
    var options = this.common.options;

    var data_form = {
      firstname: signup.value.firstname,
      lastname: signup.value.lastname,
      email: signup.value.email,
      phone: signup.value.phone,
      profession: signup.value.profession,
      pass: signup.value.pass,
      institution: signup.value.institution,
      course: signup.value.course,
      certificate: signup.value.certificate,
      c_year: signup.value.c_year,
      exp: signup.value.exp,
      provider_type: signup.value.provider_type
    }
    console.log(data_form);

    //  alert(JSON.stringify(data_form));
    var Serialized = this.common.serializeObj(data_form);
    console.log(Serialized);
    //  alert(JSON.stringify(Serialized));
    console.log(data_form);

    this.http.post(this.common.base_url + 'users/addprovider', Serialized, options)
      .map(res => res.json())
      .subscribe(sdata => {
        console.log(sdata);
        // alert('api');
        if (sdata.status == true) {
          // alert('true');
          this.users = sdata.data.User;
          console.log(this.users);
          localStorage.setItem('PhoneNumber',sdata.data.User.phonenumber);

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

}
