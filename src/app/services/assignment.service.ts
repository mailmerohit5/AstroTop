import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpService } from './http.service';
import { StorageService } from './storage.service';
import { AuthConstants } from '../config/auth-constants';


@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  constructor(
    private httpService: HttpService,
    private router: Router
  ) { }

  getAssignnmentsByTeacher(postData: any): Observable<any> {
    return this.httpService.post('getAssignmentsByTeacher', postData);
  }
}
