import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';

const routes: Routes = [
  // { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
  { path: 'admin/login', component: LoginComponent },
  // { path: 'newadmin', loadChildren: './layout/layout.module#LayoutModule', canActivate: [GuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
