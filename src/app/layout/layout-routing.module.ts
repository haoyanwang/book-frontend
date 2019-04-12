import { RouterModule, Routes, CanActivateChild } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from '../modules/dashboard/dashboard.component';

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
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
