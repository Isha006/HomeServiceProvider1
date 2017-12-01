import { Component } from '@angular/core';
import { NavController, ActionSheetController, ToastController } from 'ionic-angular';
import { Camera, CameraOptions } from "@ionic-native/camera";
import { CommonProvider } from "../../providers/common/common";
import { Http, HttpModule, RequestOptions, Headers } from "@angular/http";
import { ProfilePage } from "../profile/profile";

@Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html',
  providers:[Camera,HttpModule]
})
export class EditprofilePage {
  lname: string;
  fname: string;
  filename: string[];
  user_id: string;
  phone: string;
  dimage: string;
  name: string;
  public data: any = '';

  constructor(public navCtrl: NavController,public actionSheetCtrl: ActionSheetController,public camera: Camera,
 public common: CommonProvider, public http: Http,public toastCtrl: ToastController) {
      
    this.name = localStorage.getItem('Name');
    this.filename = this.name.split(' ');
    this.fname = this.filename[0];
    this.lname = this.filename[1];
    console.log(this.fname);
    console.log(this.lname);
    this.dimage = localStorage.getItem('Image');
    this.phone = localStorage.getItem('Phone');
    this.user_id = localStorage.getItem('user_id');

  }
  
   ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    this.data = {
      firstname: this.fname,
      lastname: this.lname,
      phone:this.phone
    }
    this.dimage=this.dimage;
  }

  edit_profile(edit){

    console.log(this.common.options);
    var options = this.common.options;

    var data_form = {
      id: this.user_id,
      firstname: edit.value.firstname,
      lastname: edit.value.lastname,
      phonenumber: edit.value.phone
    }
    console.log(data_form);

    // alert(JSON.stringify(data_form));
    var Serialized = this.common.serializeObj(data_form);
    console.log(Serialized);
    // alert(JSON.stringify(Serialized));
    console.log(data_form);

    this.http.post(this.common.base_url + 'users/editprofile', Serialized, options)
      .map(res => res.json())
      .subscribe(data => {
        
        console.log(data);
        if (data.status == true) {

          localStorage.setItem('Name',data.data.User.firstname+" "+data.data.User.lastname);
          localStorage.setItem('Phone',data.data.User.phonenumber);

          this.data = {
            firstname: data.data.User.firstname,
            lastname: data.data.User.lastname,
            phone: data.data.User.phonenumber
          }

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
  
  pro(){
//    alert('pro');
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
            this.dimage = 'data:image/jpeg;base64,' + imageData;
            localStorage.setItem("DP_IMG", this.dimage);
            // this.user_id=localStorage.getItem("ID");
            this.dimage =  imageData;    

             //alert(JSON.stringify(this.dimage));

            var data_img = ({                               
             id : this.user_id,                              
             img : this.dimage                     
            }) 

            // alert(JSON.stringify(data_img));   

             var serialized_img = this.common.serializeObj(data_img);
             console.log(serialized_img);                   
             
           let options= this.common.options;   
          
           var url:string = this.common.base_url+'users/saveimage';  
          
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
         
          this.dimage=data.image;
          localStorage.setItem('Image',data.image);
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
           message: "Profile Picture has not been uploaded",                    
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
            this.dimage = 'data:image/jpeg;base64,' + imageData;
            localStorage.setItem("P_IMG", this.dimage);

           this.dimage =  imageData; 
            // alert(JSON.stringify(this.cerimage));   

            var data_img = ({                               
             id : this.user_id,                              
             img : this.dimage                     
            })                   
              // alert(JSON.stringify(data_img));   
                         
             var serialized_img = this.common.serializeObj(data_img);
             console.log(serialized_img);                   
             
           let options= this.common.options;   
          
           var url:string = this.common.base_url+'users/saveimage';  
          
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

         this.dimage=data.image;
          localStorage.setItem('Image',data.image);
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
           message: "Profile Picture has not been uploaded",                    
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

}
