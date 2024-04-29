import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseResponse, LoginForm, LoginFormData } from '../models';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(data: LoginFormData) {
    this.http.post<BaseResponse<{ userId: number }>>(`https://social-network.samuraijs.com/api/1.1/auth/login`, { data })
      .subscribe(res => {
        if (res.resultCode === 0) {
          this.router.navigate([`/`])
        }
      })
  }

  logout() {
    this.http.delete<BaseResponse>(`https://social-network.samuraijs.com/api/1.1/auth/login`)
      .subscribe(res => {
        if (res.resultCode === 0) {
          this.router.navigate([`/login`])
        }
      })
  }

  me() {
    this.http.get<BaseResponse<{ id: number, email: string, login: string }>>(`https://social-network.samuraijs.com/api/1.1/auth/me`)

  }

}
