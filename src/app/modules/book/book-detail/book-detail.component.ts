import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { BookService } from '../book.service'

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  book: any;

  constructor(
    private route: ActivatedRoute,
    private service: BookService,
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id')
    this.service.getBookDetailById(id).subscribe(res => {
      console.log(res)
      if (res.status) {
        res.data.excerpt = res.data.excerpt.replace(/\r|\n/g, '<br>').replace(/\s/g, '')
        console.log(res.data.excerpt)
        this.book = res.data
      }
    })
  }

  lease(name) {
    let body = {
      book_name:name,
      duration:"1"
    }
    this.service.leaseBook(body).subscribe(res => console.log(res))
  }

}
