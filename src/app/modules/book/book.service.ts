import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

const LOCAL_APIROOT = environment.LOCAL_API_ROOT

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private http: HttpClient
  ) { }

  getBookList(params): Observable<any> {
    return this.http.get(`${LOCAL_APIROOT}book/get_book`, { params: params, headers: { "Authorization": localStorage.getItem('token') } })
  }

  likeBook(book_name, boolean): Observable<any> {
    return this.http.post(`${LOCAL_APIROOT}user/like_book`, { book_name: book_name, like: boolean }, { headers: { "Authorization": localStorage.getItem('token') } })
  }

  getLikeBookList(): Observable<any> {
    return this.http.get(`${LOCAL_APIROOT}user/like_book_list`, { headers: { "Authorization": localStorage.getItem('token') } })
  }

  getBookDetailById(id): Observable<any> {
    return this.http.get(`${LOCAL_APIROOT}book/book_detail/${id}`, { headers: { "Authorization": localStorage.getItem('token') } })
  }

  leaseBook(body): Observable<any> {
    return this.http.post(`${LOCAL_APIROOT}book/lease`, body, { headers: { "Authorization": localStorage.getItem('token') } })
  }

  bookRank(): Observable<any> {
    return this.http.get(`${LOCAL_APIROOT}user/rank`, { headers: { "Authorization": localStorage.getItem('token') } })
  }

  getBookType():Observable<any> {
    return this.http.get(`${LOCAL_APIROOT}book/get_book_type`, { headers: { "Authorization":localStorage.getItem('token') } })
  }
}
