import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { DomSanitizer } from '@angular/platform-browser';
import { of } from 'rxjs'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private sanitizer: DomSanitizer,
    private router:Router
  ) {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      verifycode: [null, [Validators.required], [this.verifycodeAsyncValidate]],
    });
  }

  validateForm: FormGroup;
  isVisible = true;
  base64Topng = null;
  verifycodeAsyncValidate = () => {
    // if (this.validateForm.get('verifycode').value) {
    //   this.validateForm.get('verifycode').markAsPending()
    // } else {
    //   return of(false)
    // }
    return of(true)
  };

  ngOnInit() {
    this.reloadVerifyCode();
  }

  submitForm() {
    let body = {
      username: this.validateForm.get('username').value,
      password: this.validateForm.get('password').value
    };
    this.loginService.login(body).subscribe(res => {
      if (res.status) {
        localStorage.setItem('token', res.msg)
        this.router.navigateByUrl('admin/dashboard')
      } else {
        this.validateForm.get('username').setErrors({ bad: '用户名错误' })
        this.validateForm.get('password').setErrors({ bad: '密码错误' })
      }

    });
  }

  reloadVerifyCode() {
    this.loginService.getVerifyCode().subscribe(res => {
      this.base64Topng = this.sanitizer.bypassSecurityTrustResourceUrl(res);
    });
  }

}