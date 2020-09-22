import { RouterModule, Routes, CanActivateChild } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from '../modules/dashboard/dashboard.component';
import { BookListComponent } from '../modules/book/book-list/book-list.component';
import { UserBookComponent } from '../modules/user/user-book/user-book.component';
import { UserHistoryComponent } from '../modules/user/user-history/user-history.component';
import { UserRecommandComponent } from '../modules/user/user-recommand/user-recommand.component';
import { BookDetailComponent } from '../modules/book/book-detail/book-detail.component'
import { BookRankComponent } from '../modules/book/book-rank/book-rank.component'
import { BookStatisticsComponent } from '../modules/book/book-statistics/book-statistics.component'
import { UserDetailComponent } from '../modules/user/user-detail/user-detail.component'
import { UserImgComponent } from '../modules/user/user-img/user-img.component'

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'book-list',
      component: BookListComponent,
    },
    {
      path: 'user-book',
      component: UserBookComponent,
    },
    {
      path: 'user-history',
      component: UserHistoryComponent,
    },
    {
      path: 'user-recommand',
      component: UserRecommandComponent,
    },
    {
      path: 'book-detail/:id',
      component: BookDetailComponent,
    },
    {
      path: 'book-rank',
      component: BookRankComponent,
    },
    {
      path: 'book-statistics',
      component: BookStatisticsComponent,
    },
    {
      path: 'user-detail',
      component: UserDetailComponent
    },
    {
      path: 'user-img',
      component: UserImgComponent
    }
  ],
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
