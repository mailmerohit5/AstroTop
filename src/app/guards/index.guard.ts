import { Injectable  } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { AuthConstants } from '../config/auth-constants';


@Injectable({
  providedIn: 'root'
})
export class IndexGuard implements CanActivate {
  constructor(
    private storageService: StorageService,
    private router: Router
     ){}
  canActivate(): Promise<boolean> {
    return new Promise(resolve => {   
      this.storageService
        .get(AuthConstants.AUTH)
        .then(res => {
          if (res) {          
            console.log("Index Guard");
            this.router.navigate(['user/home']);
            resolve(false);           
          } else resolve(true);
        })
        .catch(err => {
          console.log(err);
          resolve(true);
        });
    });
  }
}
