import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'

@Component({
  selector: 'app-user-book',
  templateUrl: './user-book.component.html',
  styleUrls: ['./user-book.component.scss']
})
export class UserBookComponent implements OnInit {

  likeBookList = []

  constructor(
    private service: UserService
  ) { }

  ngOnInit() {
    this.getLikeBookList()
  }

  getLikeBookList() {
    this.service.getLikeBookList().subscribe(res => {
      if(res.status) {
        this.likeBookList = res.data
      }
    })
  }

  unlike(name) {
    this.service.unlikeBook(name).subscribe(res => {
      if(res.status) {
        this.likeBookList.splice(this.likeBookList.indexOf(name),1)
        console.log(this.likeBookList)
      }
    })
  }

}
