import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd'
import { UserBookComponent } from './user-book/user-book.component';
import { UserHistoryComponent } from './user-history/user-history.component';
import { UserRecommandComponent } from './user-recommand/user-recommand.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ReactiveFormsModule,FormsModule} from '@angular/forms';
import { UserImgComponent } from './user-img/user-img.component'

@NgModule({
  declarations: [UserBookComponent, UserHistoryComponent, UserRecommandComponent, UserDetailComponent, UserImgComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UserModule { }
