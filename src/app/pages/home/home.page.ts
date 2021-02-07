import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
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
  constructor(private youtube: YoutubeVideoPlayer ,private router:Router) {}
  Openyoutube11_YouTube(videoId){
    this.youtube.openVideo(videoId);
    }
  goToPage(page:string){
    this.router.navigate(['user/'+page]);
  }

}
