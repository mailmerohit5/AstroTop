import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
  inputs: ['pageTitle']
})
export class PageHeaderComponent implements OnInit {
private _pageTitle="";
  constructor( private router:Router) { }
  
  ngOnInit() {}
  set pageTitle(pageTitle: string) {
    this._pageTitle = (pageTitle && pageTitle.trim()) || 'No Title';
  }

  get pageTitle(): string { return this._pageTitle; }

  goHome(){
    let c_url=this.router.url;
    c_url=c_url.substring(0,c_url.lastIndexOf('/')) + '/home';
    console.log(c_url);
    this.router.navigate([c_url]);
  }
}
