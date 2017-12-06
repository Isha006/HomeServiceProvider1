import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

import { SignupPage } from '../pages/signup/signup';
import { TabsPage } from '../pages/tabs/tabs';
import { SigninPage } from '../pages/signin/signin';
import { VerifyPage } from '../pages/verify/verify';
import { ProfilePage } from '../pages/profile/profile';
import { MenuPage } from '../pages/menu/menu';
import { OngoingPage } from '../pages/ongoing/ongoing';
import { IdproofsPage } from '../pages/idproofs/idproofs';
import { ServiceareaPage } from '../pages/servicearea/servicearea';
import { AboutmePage } from '../pages/aboutme/aboutme';
import { TermsofusePage } from '../pages/termsofuse/termsofuse';
import { ReviewsPage } from '../pages/reviews/reviews';
import { ContactusPage } from '../pages/contactus/contactus';
import { LocationPage } from '../pages/location/location';
import { CommonProvider } from '../providers/common/common';
import { Http, HttpModule, RequestOptions, Headers} from '@angular/http';
import { Camera, CameraOptions } from "@ionic-native/camera";
import { EditprofilePage } from "../pages/editprofile/editprofile";
import { ChatPage } from "../pages/chat/chat";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = SignupPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

