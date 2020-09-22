import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list/book-list.component'
import { NgZorroAntdModule } from 'ng-zorro-antd'
import { FormsModule } from '@angular/forms';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookRankComponent } from './book-rank/book-rank.component';
import { BookStatisticsComponent } from './book-statistics/book-statistics.component'

@NgModule({
  declarations: [BookListComponent, BookDetailComponent, BookRankComponent, BookStatisticsComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule
  ]
})
export class BookModule { }
