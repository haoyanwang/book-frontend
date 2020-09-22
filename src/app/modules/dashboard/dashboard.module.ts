import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'

@NgModule({
  imports: [
    NgZorroAntdModule,
    FormsModule,
    CommonModule
  ],
  declarations: [
    DashboardComponent,
  ],
})
export class DashboardModule { }
