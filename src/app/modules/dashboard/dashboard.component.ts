import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  array = [1, 2, 3, 4]
  current = 0;
  index = 'First-content'
  options = []
  t1Options = []
  t1Value:any;
  t2Value:any;
  bookList = []

  constructor(
    private service: DashboardService,
    private router: Router
    ) { }

  ngOnInit() {
    this.randomBook()
    this.getType()
  }

  pre(): void {
    this.current -= 1;
    this.changeContent();
  }

  next(): void {
    this.current += 1;
    this.changeContent();
  }

  done(): void {
    console.log('done');
  }

  changeContent(): void {
    switch (this.current) {
      case 0: {
        this.t1Value = null;
        break;
      }
      case 1: {
        this.t2Value = null;
        let body = {
          t1:this.t1Value
        }
        this.service.getBookT2Type(body).subscribe(res => {
          if(res.status) {
            this.t1Options = Object.keys(res.data)
          }
        })
        break;
      }
      case 2: {
        let body = {
          t1:this.t1Value,
          t2:this.t2Value
        }
        this.service.getRandomBook(body).subscribe(res => {
          if(res.status) {
            this.bookList = res.data
          }
        })
      }
      default: {
        this.index = 'error';
      }
    }
  }

  getType() {
    this.service.getBookType().subscribe(res => {
      if(res.status) {
        this.options = Object.keys(res.data)
      }
    })
  }

  toggleStart(index) {
    this.bookList[index].start = !this.bookList[index].start
  }

  randomBook() {
    this.service.getRandomBook({}).subscribe(res => {
      if(res.status) {
        this.array = res.data
      }
    })
  }

  bookDetail(id) {
    let url = `admin/book-detail/${id}`
    this.router.navigateByUrl(url)
  }


}
