import { Injectable } from '@angular/core';
import * as firebase from "firebase";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() { }
  loginUser(obj: any): Promise<any> {
    return new Promise((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(obj.email, obj.password).then(function (user) {
        resolve(firebase.auth().currentUser);
      }, function (error) {
        reject(error);
      });
    });
  }
  logInUserWithGoogle(response): Promise<any> {
    const googleCredential = firebase.auth.GoogleAuthProvider.credential(response.idToken);
    return new Promise((resolve, reject) => {
      firebase.auth().signInWithCredential(googleCredential).then(function (user) {
        resolve(firebase.auth().currentUser);
      }, function (error) {
        reject(error);
      });
    });
  }
  logInUserWithFacebook(response): Promise<any> {
    const facebookCredential = firebase.auth.FacebookAuthProvider.credential(response.authResponse.accessToken);
    return new Promise((resolve, reject) => {
      firebase.auth().signInWithCredential(facebookCredential).then(function (user) {
        resolve(firebase.auth().currentUser);
      }, function (error) {
        reject(error);
      });
    });
  }
  logOutUser(): Promise<any> {
    return new Promise((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      firebase.auth().signOut().then(function () {
        resolve(currentUser);
      }).catch(function (error) {
        reject(error);
      });
    });
  }

}
