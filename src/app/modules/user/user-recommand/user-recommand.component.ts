import { Component, OnInit } from '@angular/core';
import * as G2 from '@antv/g2'
import { View,DataSet } from '@antv/data-set'
import { UserService } from '../user.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-user-recommand',
  templateUrl: './user-recommand.component.html',
  styleUrls: ['./user-recommand.component.scss']
})
export class UserRecommandComponent implements OnInit {

  firstTime:boolean;
  recommand = []
  randomRecommand = []

  constructor(
    private service:UserService,
    private router:Router
  ) { }

  ngOnInit() {

    this.getRateMap()
  }

  genRecommand() {
    this.service.genRecommand().subscribe(res => {
      if(res.status) {
        this.recommand = res.data
      }
    })
  }

  getRateMap() {
    this.service.getRateMap().subscribe(res => {
      if(res.status) {
        this.firstTime = false;
        this.genRecommand()
        this.getRandom()
      } else {
        this.firstTime = true;
      }
    })
  }

  getRandom() {
    this.service.getRandomRecommand().subscribe(res => {
      if(res.status) {
        this.randomRecommand = res.data
      }
    })
  }

  bookDetail(id) {
    this.router.navigateByUrl(`admin/book-detail/${id}`)
  }

}
