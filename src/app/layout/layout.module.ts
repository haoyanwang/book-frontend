import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { DashboardModule } from '../modules/dashboard/dashboard.module';
import { PagesRoutingModule } from './layout-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    PagesRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    DashboardModule
  ],
  declarations: [
    LayoutComponent,
  ],
})
export class LayoutModule { }
