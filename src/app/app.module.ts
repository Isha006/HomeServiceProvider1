import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
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
import { Http, RequestOptions, Headers, HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Camera, CameraOptions } from "@ionic-native/camera";
import { EditprofilePage } from "../pages/editprofile/editprofile";
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';
import { Geolocation } from '@ionic-native/geolocation';
import { ChatPage } from "../pages/chat/chat";
import { SocialSharing } from '@ionic-native/social-sharing';
import { SMS } from '@ionic-native/sms';

@NgModule({
  declarations: [
    MyApp,
    AboutmePage,
    ContactusPage,
    HomePage,
    TabsPage,
    SignupPage,
    SigninPage,
    VerifyPage,
    ProfilePage,
    MenuPage,
    OngoingPage,
    IdproofsPage,
    ServiceareaPage,
    AboutmePage,
    TermsofusePage,
    ReviewsPage,
    ContactusPage,
    LocationPage,
	EditprofilePage,
        ChatPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutmePage,
    ContactusPage,
    HomePage,
    TabsPage,
    SignupPage,
    SigninPage,
    VerifyPage,
    ProfilePage,
    MenuPage,
    OngoingPage,
    IdproofsPage,
    ServiceareaPage,
    AboutmePage,
    TermsofusePage,
    ReviewsPage,
    ContactusPage,
    LocationPage,
	EditprofilePage,
        ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CommonProvider,
    Camera,
    Geolocation,
    NativeGeocoder,
    SocialSharing,
    SMS
  ]
})
export class AppModule {}
