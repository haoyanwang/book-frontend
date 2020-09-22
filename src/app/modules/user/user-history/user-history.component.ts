import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-user-history',
  templateUrl: './user-history.component.html',
  styleUrls: ['./user-history.component.scss']
})
export class UserHistoryComponent implements OnInit {

  viewHistoryReq = {
    limit: 30,
    offset: 0,
  }
  leaseHistoryReq = {
    limit: 30,
    offset: 0,
  }
  viewHistory = []
  leaseHistory = []

  constructor(
    private service: UserService,
    private route: Router
  ) { }

  ngOnInit() {
    this.getLeaseHistory()
  }

  getViewHistory() {
    this.service.getViewHistory(this.viewHistoryReq).subscribe(res => {
      if (res.status) {
        this.viewHistory = res.data
        console.log(res)
      }
    })
  }

  getLeaseHistory() {
    this.service.getLeaseHistory(this.leaseHistoryReq).subscribe(res => {
      if (res.status) {
        this.leaseHistory = res.data.lease_list
        console.log(this.leaseHistory)
      }
    })
  }

  viewDetail(id) {
    let url = `/admin/book-detail/${id}`
    this.route.navigateByUrl(url)
  }

  operate(history) {
    if (history.valid) {
      let body = {
        book_name: history.book.book_name
      }
      this.service.backBook(body).subscribe(res => {
        if (res.status) {
          this.leaseHistory = res.data
        }
      })
    } else {
      let body = {
        book_name: history.book.book_name,
        duration: "1"
      }
      this.service.leaseBook(body).subscribe(res => {
        if (res.status) {
          this.leaseHistory = res.data
        }
      })
    }
  }

}
