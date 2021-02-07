import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private isLoading = false;
  constructor(public loadingController: LoadingController) { }
  async presentLoading() {
    this.isLoading = true;
    const loading = await this.loadingController.create({
      spinner: "bubbles",
      message: 'Loading...',
      cssClass: 'custom-class custom-loading',
      backdropDismiss: false,
      duration:1000
    });   
      console.log('showing');
      await loading.present();        
  }

  async closeLoading() {
    this.isLoading = false;
    console.log('closing');
    this.loadingController.dismiss();
  }
}