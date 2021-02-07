import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  public authUser: any;
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/user/home',
      icon: 'home'
    },
    {
      title: 'Notice',
      url: '/user/notice',
      icon: 'notifications'
    },
    {
      title: 'Settings',
      url: '/user/remark',
      icon: 'settings'
    },
    {
      title: 'Remark',
      url: '/user/remark',
      icon: 'warning'
    }

  ];

  constructor() { }

  ngOnInit() {
    /*this.authService.userData$.subscribe((res: any) => {
      this.authUser = res;
    });*/
    const path = window.location.pathname.split('user/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
  logout() {
    //this.authService.logout();
  }
}
