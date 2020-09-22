import { Component, OnInit } from '@angular/core';
import * as G2 from '@antv/g2'
import { View, DataSet } from '@antv/data-set'
import { UserService } from '../user.service'

@Component({
  selector: 'app-user-img',
  templateUrl: './user-img.component.html',
  styleUrls: ['./user-img.component.scss']
})
export class UserImgComponent implements OnInit {

  data = []

  constructor(
    private service: UserService
  ) { }

  ngOnInit() {
    this.service.getUserImg().subscribe(res => {
      if (res.status) {
        for (let i in res.data) {
          let body = {
            item: i,
            a: res.data[i]['value'],
            b: res.data[i]['value']
          }
          this.data.push(body)
        }
        var _DataSet = DataSet,
          DataView = _DataSet.DataView;
        var dv = new DataView().source(this.data);
        var dv = new DataView().source(this.data);
        dv.transform({
          type: 'fold',
          fields: ['a', 'b'], // 展开字段集
          key: 'user', // key字段
          value: 'score' // value字段
        });
        var chart = new G2.Chart({
          container: 'mountNode',
          forceFit: true,
          height: window.innerHeight,
          padding: [20, 20, 95, 20]
        });
        chart.source(dv, {
          score: {
            min: 0,
            max: 10
          }
        });
        chart.coord('polar', {
          radius: 0.8
        });
        chart.axis('item', {
          line: null,
          tickLine: null,
          grid: {
            lineStyle: {
              lineDash: null
            },
            hideFirstLine: false
          }
        });
        chart.axis('score', {
          line: null,
          tickLine: null,
          grid: {
            type: 'polygon',
            lineStyle: {
              lineDash: null
            },
            alternateColor: 'rgba(0, 0, 0, 0.04)'
          }
        });
        chart.line().position('item*score').color('user').size(2);
        chart.point().position('item*score').color('user').shape('circle').size(4).style({
          stroke: '#fff',
          lineWidth: 1,
          fillOpacity: 1
        });
        chart.render();
      }
    })

    let data = [{
      item: 'Design',
      a: 70,
      b: 30
    }, {
      item: 'Development',
      a: 60,
      b: 70
    }, {
      item: 'Marketing',
      a: 50,
      b: 60
    }, {
      item: 'Users',
      a: 40,
      b: 50
    }, {
      item: 'Test',
      a: 60,
      b: 70
    }, {
      item: 'Language',
      a: 70,
      b: 50
    }, {
      item: 'Technology',
      a: 50,
      b: 40
    }, {
      item: 'Support',
      a: 30,
      b: 40
    }, {
      item: 'Sales',
      a: 60,
      b: 40
    }, {
      item: 'UX',
      a: 50,
      b: 60
    }];

  }
  
}
