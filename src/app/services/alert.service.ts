import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {  
  constructor(private alertController:AlertController) { }
  async presentAlertConfirm(headerText,messageText,cancelCallback,okCallback) {
    const alert = await this.alertController.create({
      header: headerText,
      message: messageText,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'alertCancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
            cancelCallback();
          }
        }, {
          text: 'Okay',
          role: 'Okay',
          cssClass: 'alertOk',
          handler: (blah) => {
            console.log('Confirm Ok: blah');
            okCallback();
          }
        }
      ]
    });
    await alert.present();
  }
  async presentAlertRadio(headerText,inputArray,cancelCallback,okCallback) {
    const alert = await this.alertController.create({
      header: headerText,
      inputs: inputArray,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (data) => {
            console.log('Confirm Cancel');
            cancelCallback(data);
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log('Confirm Ok');
            okCallback(data);
          }
        }
      ]
    });

    await alert.present();
  }

}
