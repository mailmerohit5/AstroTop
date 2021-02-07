import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-horoscope',
  templateUrl: './horoscope.page.html',
  styleUrls: ['./horoscope.page.scss'],
})
export class HoroscopePage implements OnInit {
  zodiacs=[
    {id:1,title:'aries'},
    {id:2,title:'tauras'},
    {id:3,title:'gemini'},
    {id:4,title:'cancer'},
    {id:5,title:'leo'},
    {id:6,title:'virgo'},
    {id:7,title:'libra'},
    {id:8,title:'scorpio'},
    {id:9,title:'sagittarius'},
    {id:10,title:'capricorn'},
    {id:11,title:'aquarius'},
    {id:12,title:'pisces'},
  ]
  constructor(private router:Router) { }

  ngOnInit() {
  }
  goToPage(page:string){
    this.router.navigate(['user/'+page]);
  }

}
