import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginForm } from './../../../core/models';

@Component({
  selector: 'td-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  loginForm = new FormGroup<LoginForm>({
    email: new FormControl('', { nonNullable: true, validators: [Validators.email, Validators.required] }),
    password: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    rememberMe: new FormControl(false, { nonNullable: true })
  })

  submitHandler() {
    const value = this.loginForm.value
    console.log(value)
  }

  get email() {
    return this.loginForm.get('email')
  }

  get password() {
    return this.loginForm.get('password')
  }
}
