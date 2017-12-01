import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ToastController } from 'ionic-angular';
import { Camera, CameraOptions } from "@ionic-native/camera";
import { CommonProvider } from "../../providers/common/common";
import { Http, HttpModule, RequestOptions, Headers } from "@angular/http";
import { ProfilePage } from "../profile/profile";

/**
 * Generated class for the IdproofsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-idproofs',
  templateUrl: 'idproofs.html',
  providers:[Camera,HttpModule]
})
export class IdproofsPage {
  user_id: string;
  proof_image: string;
  pimage: any;
  image: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public actionSheetCtrl: ActionSheetController,public camera: Camera,
 public common: CommonProvider, public http: Http,public toastCtrl: ToastController) {

this.user_id = localStorage.getItem('user_id');
// alert(this.user_id);
this.load();
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad IdproofsPage');
  }
  pro(){
     this.navCtrl.push(ProfilePage);
}

  openActionSheet() {
    // this.user_id = localStorage.getItem("ID");
    console.log('opening');
    let actionsheet = this.actionSheetCtrl.create({
      title: "Choose Album",
      buttons: [{
        text: 'Camera',
        handler: () => {
          console.log("Camera Clicked");

          const options: CameraOptions = {
            quality: 10,
            sourceType: 1,
            allowEdit: true,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
          }
          this.camera.getPicture(options).then((imageData) => {
            this.proof_image = 'data:image/jpeg;base64,' + imageData;
            localStorage.setItem("P_IMG", this.pimage);
            // this.user_id=localStorage.getItem("ID");
            this.pimage =  imageData;    

//             alert(JSON.stringify(this.pimage));

            var data_img = ({                               
             id : this.user_id,                              
             img : this.pimage                     
            }) 

            // alert(JSON.stringify(data_img));   

             var serialized_img = this.common.serializeObj(data_img);
             console.log(serialized_img);                   
             
           let options= this.common.options;   
          
           var url:string = this.common.base_url+'users/savedocs';  
          
           this.http.post(url, serialized_img, options).map(res=>res.json()).subscribe(data=>{  
              //  alert('api');
            // alert("img ->"+data);             
              //  alert("img ->"+JSON.stringify(data));            
           if(data.status == true){ 
          //  alert('true');                                  
          //  let toast = this.toastCtrl.create({                  
          //  message: data.msg,                                 
          //  duration: 3000                              
          // }); 
         
          this.image=data.docs;
          // alert(JSON.stringify(this.image));

          }else if(data.status == false){ 
            // alert('false');             
           let toast = this.toastCtrl.create({   
           message: data.msg,                    
           duration: 3000                        
          }); 
          toast.present();               
          } else {
            // alert('else');
            let toast = this.toastCtrl.create({   
           message: "Document has not been uploaded",                    
           duration: 3000                        
          }); 
          toast.present();   
           }                  
           })  
          }, (err) => {
            alert(JSON.stringify(err));
          });
        }
      },
      {
        text: 'Gallery',
        handler: () => {
          const options: CameraOptions = {
            quality: 10,
            sourceType: 0,
            allowEdit: true,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
          }
          this.camera.getPicture(options).then((imageData) => {
            this.proof_image = 'data:image/jpeg;base64,' + imageData;
            localStorage.setItem("P_IMG", this.pimage);

           this.pimage =  imageData; 
            // alert(JSON.stringify(this.cerimage));   

            var data_img = ({                               
             id : this.user_id,                              
             img : this.pimage                     
            })                   
              // alert(JSON.stringify(data_img));   
                         
             var serialized_img = this.common.serializeObj(data_img);
             console.log(serialized_img);                   
             
           let options= this.common.options;   
          
           var url:string = this.common.base_url+'users/savedocs';  
          
           this.http.post(url, serialized_img, options).map(res=>res.json()).subscribe(data=>{
              //  alert('api');      
            // alert("img ->"+data);             
              //  alert("img ->"+JSON.stringify(data));            
           if(data.status == true){                                 
          //  let toast = this.toastCtrl.create({                  
          //  message: data.msg,                                 
          //  duration: 3000                              
          // }); 

          // localStorage.setItem('STATUS',data.data.status);

          this.image=data.docs;
          // alert(JSON.stringify(this.image));

           }else if(data.status == false){ 
            //  alert('false');             
           let toast = this.toastCtrl.create({   
           message: data.msg,                    
           duration: 3000                        
          }); 
          toast.present();                
          } 
          else {
            // alert('else');
            let toast = this.toastCtrl.create({   
           message: "Document has not been uploaded",                    
           duration: 3000                        
          }); 
          toast.present();   
           }                     
           })  
          }, (err) => {
            alert("Server not Working,Please Check your Internet Connection and try again!");
          });
        }
      },
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
          //  actionsheet.dismiss()         
        }
      }
      ]
    });
    actionsheet.present();
  }

load(){
   console.log(this.common.options);
    var options = this.common.options;

    var data_form = {
      id: this.user_id,
      img: ''
    }
    console.log(data_form);

    // alert(JSON.stringify(data_form));
    var Serialized = this.common.serializeObj(data_form);
    console.log(Serialized);
    // alert(JSON.stringify(Serialized));
    console.log(data_form);

    this.http.post(this.common.base_url + 'users/savedocs', Serialized, options)
      .map(res => res.json())
      .subscribe(data => {
        // alert('api');
        console.log(data);
        if (data.status == true) {
          // alert('true')
         
          this.image=data.docs;
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
}
