import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public authUser: any;
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/user/home',
      icon: 'home'
    },
    {
      title: 'Horoscope',
      url: '/user/horoscope',
      icon: 'planet'
    },
    {
      title: 'Blog',
      url: '/user/blog',
      icon: 'newspaper'
    },
    {
      title: 'Notifications',
      url: '/user/notification',
      icon: 'notifications'
    },
    {
      title: 'Wallet',
      url: '/user/addmoney',
      icon: 'wallet'
    },
    {
      title: 'Chat',
      url: '/user/chat',
      icon: 'chatbubbles'
    },
    {
      title: 'Call',
      url: '/user/call',
      icon: 'call'
    },
    {
      title: 'Mall',
      url: '/user/mall',
      icon: 'cart'
    },
    {
      title: 'Report',
      url: '/user/report',
      icon: 'document'
    },   


  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString(' #d65c0a');
      this.splashScreen.hide();
    });
    const path = window.location.pathname.split('user/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
 logout(){
   //
 }
}
