import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Facebook } from '@ionic-native/facebook/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { AlertService } from 'src/app/services/alert.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { LoadingService } from 'src/app/services/loading.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  LoginForm: FormGroup;
  constructor(private loading: LoadingService,
    private alert: AlertService,
    private toast:ToastService,
    private firebaseProvider: FirebaseService,
    private router: Router,
      // private menu: MenuController
    private googlePlus: GooglePlus,
    private fb: Facebook
  ) {
    //this.menu.enable(false);
    let me = this;
    this.LoginForm = new FormGroup({
      input1: new FormControl('', Validators.required), input2: new FormControl('', Validators.required),
    });
  } Login(params) {
    if( params.input1=='' ||  params.input2==''){
      this.toast.presentToast('Please Fill The Credentials');
      return;
    }
    let obj = { email: params.input1, password: params.input2 }
    this.loading.presentLoading().then(() => {
      this.firebaseProvider.loginUser(obj).then((data) => {
        this.loading.closeLoading();
        this.LoginForm.reset()
      }).catch((error: any) => {
        this.loading.closeLoading();
        this.toast.presentToast('' + error.message);
      });
    });
  }
  //ionViewWillEnter() { this.menu.enable(false); }
  //ionViewWillLeave() { this.menu.enable(true); }
  loginWithGoogle() {
    let me = this;
    me.googlePlus.login({ 'webClientId': '1007012044862-6hf3lgca77q3r75fclho3uhjp4n2et50.apps.googleusercontent.com', 'offline': true }).then(res => {


      me.loading.presentLoading().then(() => {
        me.firebaseProvider.logInUserWithGoogle(res).then((data) => {
          me.loading.closeLoading();
        }).catch((error: any) => {
          me.loading.closeLoading();
          me.toast.presentToast(''+ error);
        });
      });
    });
  } loginWithFacebook() {
    let me = this; me.fb.login(['public_profile', 'email']).then(response => {
      me.loading.presentLoading().then(() => {
        me.firebaseProvider.logInUserWithFacebook(response).then((data) => {
          me.loading.closeLoading();
        }).catch((error: any) => {
          me.loading.closeLoading();
          me.toast.presentToast(''+error);
        });
      });
    });
  }

  ngOnInit() {
  }

  navToHome(){
    this.router.navigate(['user/home']);
  }
}
