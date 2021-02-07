import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addmoney',
  templateUrl: './addmoney.page.html',
  styleUrls: ['./addmoney.page.scss'],
})
export class AddmoneyPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  goToPage(page:string){
    this.router.navigate(['user/'+page]);
  }

}
