import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) { }

  post(serviceName: string, data: any) {
    const headers = new HttpHeaders();
    const options = { headers: headers, withCredintials: false };
    const url = environment.apiUrl + serviceName;

    return this.http.post(url, JSON.stringify(data), options);
  }
  postFormData(type, formData, CallBackSuccess, CallBackError) {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.addEventListener("readystatechange", function (data) {
      if (xmlHttp.readyState == 4) {
        if (xmlHttp.status == 200) {
          console.log("Server Done XML REQUEST");
          console.log(data);
          CallBackSuccess(xmlHttp.response);
        }
      }
    });
    xmlHttp.addEventListener('error', function (ev) {
      CallBackError();
    });
    xmlHttp.open('post', environment.apiUrl + type);
    xmlHttp.send(formData);
  }
}