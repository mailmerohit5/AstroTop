import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mall',
  templateUrl: './mall.page.html',
  styleUrls: ['./mall.page.scss'],
})
export class MallPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  goToPage(page:string){
    this.router.navigate(['user/'+page]);
  }

}
