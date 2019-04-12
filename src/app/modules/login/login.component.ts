import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private sanitizer: DomSanitizer
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
    return true;
  }

  ngOnInit() {
    this.reloadVerifyCode();
  }

  submitForm() {
    console.log(123);
  }

  reloadVerifyCode() {
    this.loginService.getVerifyCode().subscribe(res => {
      this.base64Topng = this.sanitizer.bypassSecurityTrustResourceUrl(res);
    });
  }


}
