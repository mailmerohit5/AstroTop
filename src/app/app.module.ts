import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import * as firebase from "firebase";
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Facebook } from '@ionic-native/facebook/ngx';
import { FirebaseService } from './services/firebase.service';
import { AlertService } from './services/alert.service';
import { LoadingService } from './services/loading.service';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export const config = {
  apiKey: "AIzaSyBxuMscFcwJLRhhNrainMr7FVhgiYKXvhs",
  databaseURL: "https://astrotop-47127.firebaseio.com",
  projectId: "astrotop-47127",
  storageBucket: "astrotop-47127.appspot.com",
  messagingSenderId: "1007012044862"
  };
  firebase.initializeApp(config);
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    GooglePlus,
    Facebook,
    FirebaseService,
    AlertService,
    LoadingService,
    YoutubeVideoPlayer,
    HttpClient,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
