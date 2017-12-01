import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { CommonProvider } from "../../providers/common/common";
import 'rxjs/add/operator/map';
import { HttpModule, Http, RequestOptions, Headers } from '@angular/http';

/**
 * Generated class for the TermsofusePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-termsofuse',
  templateUrl: 'termsofuse.html',
  providers: [HttpModule, CommonProvider]
})
export class TermsofusePage {
  desc: any;
  title: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
   public common: CommonProvider, public http: Http,
    public toastCtrl: ToastController) {
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TermsofusePage');
    this.load();
  }

  load()
  {
  	console.log(this.common.options);
    var options = this.common.options;

    var data_form = {
      page: 'terms'
    }
    console.log(data_form);

    // alert(JSON.stringify(data_form));
    var Serialized = this.common.serializeObj(data_form);
    console.log(Serialized);
    // alert(JSON.stringify(Serialized));
    console.log(data_form);

    this.http.post(this.common.base_url + 'staticpages/view', Serialized, options)
      .map(res => res.json())
      .subscribe(sdata => {
        console.log(sdata);
        if (sdata.status == true) {
          
         this.title=sdata.title;
         this.desc=sdata.desc;
                 
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

}
