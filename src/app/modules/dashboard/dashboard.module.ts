import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    NgZorroAntdModule,
  ],
  declarations: [
    DashboardComponent,
  ],
})
export class DashboardModule { }
