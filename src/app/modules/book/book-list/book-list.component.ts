import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service'
import { Router } from '@angular/router'
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  listOfData = []
  cnt: number
  bookRequest = {
    limit: 30,
    offset: 0,
    book_name: null,
    book_type:null
  }
  loading = false
  likeBookList = []
  search_ipt: string;
  isVisible = false;
  leaseBook: string;
  selectedValue = '1';
  leaseLoading = false;
  current = 0;
  options = [];
  optValue:any;

  constructor(
    private service: BookService,
    private route: Router,
    private notification: NzNotificationService
  ) { }

  ngOnInit() {
    this.loadBook()
    this.getLikeBookList()
    this.getBookType()
  }

  loadBook() {
    this.loading = true
    if (this.search_ipt) {
      this.bookRequest.book_name = this.search_ipt
    } else {
      delete this.bookRequest.book_name;
    }
    if(this.optValue) {
      this.bookRequest.book_type = this.optValue
    } else{
      delete this.bookRequest.book_type
    }
    this.service.getBookList(this.bookRequest).subscribe(res => {
      if (res.status) {
        this.cnt = res.data.total
        this.listOfData = res.data.book
      }
      this.loading = false
    })
  }

  changeIndex(e) {
    this.bookRequest.offset = (e - 1) * 30
    this.loadBook()
  }

  heart(name, boolean) {
    this.service.likeBook(name, boolean).subscribe(res => {
      if (res.status) {
        if (boolean) {
          this.likeBookList.push(name)
        } else {
          this.likeBookList.splice(this.likeBookList.indexOf(name), 1)
        }
      }
    })

  }

  getLikeBookList() {
    this.service.getLikeBookList().subscribe(res => {
      if (res.status) {
        this.likeBookList = res.data
      }
    })
  }

  bookDetail(id) {
    let url = `admin/book-detail/${id}`
    this.route.navigateByUrl(url)
  }

  lease(name) {
    this.isVisible = true;
    this.leaseBook = name
  }

  handleCancel() {
    this.isVisible = false;
  }

  getBookType() {
    this.service.getBookType().subscribe(res => {
      if(res.status) {
        this.options = Object.keys(res.data)
      }
    })
  }

  handleOk() {
    this.leaseLoading = true;
    setTimeout(() => {
      this.current = 1
    }, 1000)
    setTimeout(() => {
      this.current = 2
    }, 2000)
    setTimeout(() => {
      this.current = 3
    }, 3000)
    setTimeout(() => {
      this.current = 4
      let body = {
        book_name:this.leaseBook,
        duration:this.selectedValue
      }
      this.service.leaseBook(body).subscribe(res => {
        this.current = 5
        if(res.status) {
          this.notification.success('成功','借书成功')
        }
        this.isVisible = false;
        this.current = 0
        this.leaseLoading = false;
      })
    }, 4000)
  }

  optionChange(e) {
    this.loadBook()
  }

}
