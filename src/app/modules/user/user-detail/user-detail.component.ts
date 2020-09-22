import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service'

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  validateForm: FormGroup;
  username:String;

  constructor(
    private fb: FormBuilder,
    private service: UserService
  ) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      username: [null, [Validators.required]],
      nickname: [null, [Validators.required]],
      birthday: [null, [Validators.required]],
      sex: [null, [Validators.required]],
      college: [null, [Validators.required]],
    })
    this.getUser()
  }

  getUser() {
    this.service.getUserDeatil().subscribe(res => {
      if (res.status) {
        this.username = res.data.username
        if (res.data.email) {
          this.validateForm.get('email').patchValue(res.data.email)
        }
        if (res.data.username) {
          this.validateForm.get('username').patchValue(res.data.username)
        }
        if (res.data.nickname) {
          this.validateForm.get('nickname').patchValue(res.data.nickname)
        }
        if (res.data.sex) {
          this.validateForm.get('sex').patchValue(res.data.sex)
        }
        if (res.data.birthday) {
          this.validateForm.get('birthday').patchValue(res.data.birthday)
        }
        if (res.data.college) {
          this.validateForm.get('college').patchValue(res.data.college)
        }
      }
    })
  }

  submitForm() {
    for (let i in this.validateForm.controls) {
      this.validateForm.get(i).markAsDirty()
      this.validateForm.get(i).markAsTouched()
    }
    if (this.validateForm.valid) {
      let body = {}
      for (let i in this.validateForm.controls) {
        body[i] = this.validateForm.get(i).value
      }
      this.service.patchUserDetail(body).subscribe(res => console.log(res))
    }
  }
}
