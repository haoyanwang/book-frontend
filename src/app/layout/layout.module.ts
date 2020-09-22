import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { DashboardModule } from '../modules/dashboard/dashboard.module';
import { PagesRoutingModule } from './layout-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BookModule } from '../modules/book/book.module'
import { UserModule } from '../modules/user/user.module'


@NgModule({
  imports: [
    PagesRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    DashboardModule,
    BookModule,
    UserModule
  ],
  declarations: [
    LayoutComponent,
  ],
})
export class LayoutModule { }
