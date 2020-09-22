import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

const LOCAL_APIROOT = environment.LOCAL_API_ROOT

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private http: HttpClient
  ) { }

  getBookType(): Observable<any> {
    return this.http.get(`${LOCAL_APIROOT}book/get_book_type`, { headers: { "Authorization": localStorage.getItem('token') } })
  }

  getBookT2Type(body): Observable<any> {
    return this.http.get(`${LOCAL_APIROOT}book/book_get_book_t2_type`, { headers: { "Authorization": localStorage.getItem('token') },params:body })
  }

  getRandomBook(body):Observable<any> {
    return this.http.get(`${LOCAL_APIROOT}book/random`,{ headers: { "Authorization": localStorage.getItem('token') },params:body })
  }
}
