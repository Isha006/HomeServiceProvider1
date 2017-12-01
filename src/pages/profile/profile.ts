import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { IdproofsPage } from '../idproofs/idproofs';
import { ServiceareaPage } from '../servicearea/servicearea';
import { AboutmePage } from '../aboutme/aboutme';
import { EditprofilePage } from "../editprofile/editprofile";
import { CommonProvider } from "../../providers/common/common";
import { Http, HttpModule, RequestOptions, Headers } from "@angular/http";

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
  providers:[HttpModule]
})
export class ProfilePage {
  phone: string;
  image: string;
  name: string;
  user_id: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public common: CommonProvider, public http: Http,public toastCtrl: ToastController) {
//    this.name=localStorage.getItem('Name');
//    this.image=localStorage.getItem('Image');
//    this.phone=localStorage.getItem('Phone');
    
//    this.name=this.navParams.get('name');
//    this.image=this.navParams.get('image');
//    this.phone=this.navParams.get('phone');
this.user_id = localStorage.getItem('user_id');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    this.view();
  }
  
  view(){
      console.log(this.common.options);
    var options = this.common.options;

    var data_form = {
      id: this.user_id,
      
    }
    console.log(data_form);

    // alert(JSON.stringify(data_form));
    var Serialized = this.common.serializeObj(data_form);
    console.log(Serialized);
    // alert(JSON.stringify(Serialized));
    console.log(data_form);

    this.http.post(this.common.base_url + 'users/view', Serialized, options)
      .map(res => res.json())
      .subscribe(data => {
        
        console.log(data);
        if (data.status == true) {

//          localStorage.setItem('Name',data.data.User.firstname+" "+data.data.User.lastname);
//          localStorage.setItem('Phone',data.data.User.phonenumber);
            this.name= data.data.User.name;
            this.phone=  data.data.User.phonenumber;
            this.image= data.data.User.image;
//          this.data = {
//            firstname: data.data.User.firstname,
//            lastname: data.data.User.lastname,
//            phone: data.data.User.phonenumber
//          }

          let toast = this.toastCtrl.create({
            message: data.msg,
            duration: 3000,
            position: 'middle'
          });
          toast.present();
          
        }
        else {
          console.log(data.msg);

          // let toast = this.toastCtrl.create({
          //   message: "Unable to fetch data",
          //   duration: 3000,
          //   position: 'middle'
          // });
          // toast.present();
        }


      }, error => {
        // console.log(sdata.msg);

      });

  }

  idproofs()
  {
  	this.navCtrl.push(IdproofsPage);
  }
   servicearea()
  {
  	this.navCtrl.push(ServiceareaPage);
  }

  aboutme()
  {
  	this.navCtrl.push(AboutmePage);
  }
  editprofile(){
	this.navCtrl.push(EditprofilePage);
  }

}
