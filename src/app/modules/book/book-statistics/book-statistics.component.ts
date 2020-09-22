import { Component, OnInit } from '@angular/core';
import * as G2 from '@antv/g2'
import { DashboardService } from '../../dashboard/dashboard.service'

@Component({
  selector: 'app-book-statistics',
  templateUrl: './book-statistics.component.html',
  styleUrls: ['./book-statistics.component.scss']
})
export class BookStatisticsComponent implements OnInit {

  constructor(
    private service:DashboardService
  ) { }

  ngOnInit() {
    this.getBookNum()
  }

  getBookNum() {
    this.service.getBookType().subscribe(res => {
      if(res.status) {
        let typeArr = []
        for(let i in res.data) {
          let obj = {
            name:i,
            number:res.data[i]
          }
          typeArr.push(obj)
        }
        const chart = new G2.Chart({
          container: 'mountNode',
          forceFit: true,
          height: window.innerHeight
        });
        chart.source(typeArr);
        chart.scale('sales', {
          tickInterval: 20
        });
        chart.interval().position('name*number');
        chart.render();
      }
    })
  }

}
