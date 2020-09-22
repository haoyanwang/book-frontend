import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

const LOCAL_APIROOT = environment.LOCAL_API_ROOT


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  getLikeBookList(): Observable<any> {
    return this.http.get(`${LOCAL_APIROOT}user/like_book_list`, { headers: { "Authorization": localStorage.getItem('token') } })
  }

  unlikeBook(book_name): Observable<any> {
    return this.http.post(`${LOCAL_APIROOT}user/like_book`, { book_name: book_name, like: false }, { headers: { "Authorization": localStorage.getItem('token') } })
  }

  getViewHistory(body): Observable<any> {
    return this.http.get(`${LOCAL_APIROOT}user/get_view_history`, { headers: { "Authorization": localStorage.getItem('token') }, params: body })
  }

  getLeaseHistory(body): Observable<any> {
    return this.http.get(`${LOCAL_APIROOT}book/get_lease_list`, { headers: { "Authorization": localStorage.getItem('token') }, params: body })
  }

  genRecommand(): Observable<any> {
    return this.http.get(`${LOCAL_APIROOT}recommand/get_recommand`, { headers: { "Authorization": localStorage.getItem('token') } })
  }

  getRateMap(): Observable<any> {
    return this.http.get(`${LOCAL_APIROOT}recommand/get_rate_map`, { headers: { "Authorization": localStorage.getItem('token') } })
  }

  getRandomRecommand(): Observable<any> {
    return this.http.get(`${LOCAL_APIROOT}book/random`, { headers: { "Authorization": localStorage.getItem('token') } })
  }

  getUserDeatil(): Observable<any> {
    return this.http.post(`${LOCAL_APIROOT}user/detail`, {}, { headers: { "Authorization": localStorage.getItem('token') } })
  }

  patchUserDetail(body): Observable<any> {
    return this.http.patch(`${LOCAL_APIROOT}user/detail`, body, { headers: { "Authorization": localStorage.getItem('token') } })
  }

  getUserImg(): Observable<any> {
    return this.http.get(`${LOCAL_APIROOT}user/img`, { headers: { "Authorization": localStorage.getItem('token') } })
  }

  leaseBook(body): Observable<any> {
    return this.http.post(`${LOCAL_APIROOT}book/lease`, body, { headers: { "Authorization": localStorage.getItem('token') } })
  }

  backBook(body): Observable<any> {
    return this.http.post(`${LOCAL_APIROOT}book/backbook`, body, { headers: { "Authorization": localStorage.getItem('token') } })
  }
}
