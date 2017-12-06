import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { CommonProvider } from "../../providers/common/common";
import 'rxjs/add/operator/map';
import { HttpModule, Http, RequestOptions, Headers } from '@angular/http';
import { ProfilePage } from "../profile/profile";
/**
 * Generated class for the AboutmePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aboutme',
  templateUrl: 'aboutme.html',
  providers: [HttpModule, CommonProvider]
})
export class AboutmePage {
    class_add:any
    match_id:any;
    check_id:any;
  service_id:Object;
  provider_id: string;
  serv: any;
  providerservice:any;
  ids=[];
  public data: any = '';
  public fgg:any ='';
  constructor(public navCtrl: NavController, public navParams: NavParams,
   public common: CommonProvider, public http: Http,
    public toastCtrl: ToastController) {
       this.provider_id = localStorage.getItem('user_id');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutmePage');
     this.list();
  }
  
  back(){
      this.navCtrl.push(ProfilePage);
  }

pro(){
     this.navCtrl.push(ProfilePage);
}
  list()
  {
  	console.log(this.common.options);
    var options = this.common.options;

    var data_form = {
      provider_id:this.provider_id
    }
    console.log(data_form);

    // alert(JSON.stringify(data_form));
    var Serialized = this.common.serializeObj(data_form);
    console.log(Serialized);
    // alert(JSON.stringify(Serialized));
    console.log(data_form);

    this.http.post(this.common.base_url + 'services/servicelist', Serialized, options)
      .map(res => res.json())
      .subscribe(sdata => {
        console.log(sdata);
//console.log(sdata.providerservice[0])
        this.class_add=sdata.service;
        if (sdata.status == true) {
     
         this.serv=sdata.service;
          this.providerservice =sdata.providerservice;
         
          let toast = this.toastCtrl.create({
            message: sdata.msg,
            duration: 3000,
            position: 'middle'
          });
          toast.present();
         
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
  // save(list){
  //   console.log(list.value.ids);
  // }
  add(location:Object, isChecked: boolean){
    console.log(location);
    this.service_id=location;

    console.log(this.common.options);
    var options = this.common.options;

    var data_form = {
      service_id:this.service_id,
      provider_id:this.provider_id
    }
    console.log(data_form);

    // alert(JSON.stringify(data_form));
    var Serialized = this.common.serializeObj(data_form);
    console.log(Serialized);
    // alert(JSON.stringify(Serialized));
    console.log(data_form);

    this.http.post(this.common.base_url + 'services/provideraddservice', Serialized, options)
      .map(res => res.json())
      .subscribe(sdata => {
        console.log(sdata);
        if (sdata.status == true) {
          
        //  this.serv=sdata.service;
         
          let toast = this.toastCtrl.create({
            message: sdata.msg,
            duration: 1700,
            position: 'middle'
          });
          toast.present();
         
        }
        else{
          console.log(sdata.msg);
          
          let toast = this.toastCtrl.create({
            message: sdata.msg,
            duration: 1700,
            position: 'middle'
          });
          toast.present();
        }


      }, error => {
        // console.log(sdata.msg);

      });
  }

}
