import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

const APIROOT = environment.API_ROOT;
const LOCAL_APIROOT = environment.LOCAL_API_ROOT

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) {
  }

  getVerifyCode(): Observable<string> {
    return this.http.get(`${APIROOT}verifycode`, { responseType: 'text' });
  }

  validate(verifycode) {
    console.log(1);
  }

  login(body):Observable<any> {
    return this.http.post(`${LOCAL_APIROOT}user/login`, body);
  }
}
