import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-book-rank',
  templateUrl: './book-rank.component.html',
  styleUrls: ['./book-rank.component.scss']
})
export class BookRankComponent implements OnInit {

  viewRank = []
  likeRank= []
  leaseRank = []

  constructor(
    private service: BookService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getBookRank()
  }

  getBookRank() {
    this.service.bookRank().subscribe(res => {
      if(res.status) {
        this.viewRank = res.data.view_rank.sort(this.compare()).slice(0,10)
        this.likeRank = res.data.like_rank.sort(this.compare()).slice(0,10)
        this.leaseRank = res.data.lease_rank.sort(this.compare()).slice(0,10)
      }
    })
  }

  compare() {
    return function (a, b) {
      var value1 = a['value'];
      var value2 = b['value'];
      return value2 - value1;
    }
  }

  bookDetail(id) {
    this.router.navigateByUrl(`admin/book-detail/${id}`)
  }

}
