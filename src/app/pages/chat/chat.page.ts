import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  list4 = [
    {
      TopLeftLabel: "Venkman",
      BottomLeftLabel: "Back off, man. I'm a scientist.",
      TopRightLabel: "",
      MidRightLabel: "8:59 pm",
      BottomRightLabel: "",
      ImageSrc: "http://auth.ionicspeedo.com/Images/assets/james-parker.jpg"
    },
    {
      TopLeftLabel: "Venkman",
      BottomLeftLabel: "Back off, man. I'm a scientist.",
      TopRightLabel: "",
      MidRightLabel: "8:59 pm",
      BottomRightLabel: "",
      ImageSrc: "http://auth.ionicspeedo.com/Images/assets/james-parker.jpg"
    },
    {
      TopLeftLabel: "Venkman",
      BottomLeftLabel: "Back off, man. I'm a scientist.",
      TopRightLabel: "",
      MidRightLabel: "8:59 pm",
      BottomRightLabel: "",
      ImageSrc: "http://auth.ionicspeedo.com/Images/assets/james-parker.jpg"
    },
    {
      TopLeftLabel: "Venkman",
      BottomLeftLabel: "Back off, man. I'm a scientist.",
      TopRightLabel: "",
      MidRightLabel: "8:59 pm",
      BottomRightLabel: "",
      ImageSrc: "http://auth.ionicspeedo.com/Images/assets/james-parker.jpg"
    },
    {
      TopLeftLabel: "Venkman",
      BottomLeftLabel: "Back off, man. I'm a scientist.",
      TopRightLabel: "",
      MidRightLabel: "8:59 pm",
      BottomRightLabel: "",
      ImageSrc: "http://auth.ionicspeedo.com/Images/assets/james-parker.jpg"
    },
    { 
      TopLeftLabel: "Venkman", 
      BottomLeftLabel: "Back off, man. I'm a scientist.", 
      TopRightLabel: "", 
      MidRightLabel: "8:59 pm", 
      BottomRightLabel: "", 
      ImageSrc: "http://auth.ionicspeedo.com/Images/assets/james-parker.jpg" 
    },
    { 
      TopLeftLabel: "Venkman", 
      BottomLeftLabel: "Back off, man. I'm a scientist.", 
      TopRightLabel: "", 
      MidRightLabel: "8:59 pm", 
      BottomRightLabel: "", 
      ImageSrc: "http://auth.ionicspeedo.com/Images/assets/james-parker.jpg" 
    },
    { 
      TopLeftLabel: "Venkman", 
      BottomLeftLabel: "Back off, man. I'm a scientist.", 
      TopRightLabel: "", 
      MidRightLabel: "8:59 pm", 
      BottomRightLabel: "", 
      ImageSrc: "http://auth.ionicspeedo.com/Images/assets/james-parker.jpg" 
    },
    { 
      TopLeftLabel: "Venkman", 
      BottomLeftLabel: "Back off, man. I'm a scientist.", 
      TopRightLabel: "", 
      MidRightLabel: "8:59 pm", 
      BottomRightLabel: "", 
      ImageSrc: "http://auth.ionicspeedo.com/Images/assets/james-parker.jpg" 
    },
    { 
      TopLeftLabel: "Venkman", 
      BottomLeftLabel: "Back off, man. I'm a scientist.", 
      TopRightLabel: "", 
      MidRightLabel: "8:59 pm", 
      BottomRightLabel: "", 
      ImageSrc: "http://auth.ionicspeedo.com/Images/assets/james-parker.jpg" 
    },
    { 
      TopLeftLabel: "Venkman", 
      BottomLeftLabel: "Back off, man. I'm a scientist.", 
      TopRightLabel: "", 
      MidRightLabel: "8:59 pm", 
      BottomRightLabel: "", 
      ImageSrc: "http://auth.ionicspeedo.com/Images/assets/james-parker.jpg" 
    },
    { 
      TopLeftLabel: "Venkman", 
      BottomLeftLabel: "Back off, man. I'm a scientist.", 
      TopRightLabel: "", 
      MidRightLabel: "8:59 pm", 
      BottomRightLabel: "", 
      ImageSrc: "http://auth.ionicspeedo.com/Images/assets/james-parker.jpg" 
    },
    { 
      TopLeftLabel: "Venkman", 
      BottomLeftLabel: "Back off, man. I'm a scientist.", 
      TopRightLabel: "", 
      MidRightLabel: "8:59 pm", 
      BottomRightLabel: "", 
      ImageSrc: "http://auth.ionicspeedo.com/Images/assets/james-parker.jpg" 
    },

  ];
  constructor(private router:Router) { }

  ngOnInit() {
  }
  goToPage(page:string){
    this.router.navigate(['user/'+page]);
  }

}
