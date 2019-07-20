import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tokenKey } from '@angular/core/src/view';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthService {
  private readonly loginUrl = 'http://localhost:5000/auth/login';
  private readonly registerUrl = 'http://localhost:5000/auth/register';

  constructor(
    private http : HttpClient,
    public toastr: ToastrService,
  ) {  }

  register(body) {
    return this.http.post(this.registerUrl, body);
  }

  login(body) {
    return this.http.post(this.loginUrl, body);
  }

  logout() {
    localStorage.clear();
    this.toastr.success('Logout successful!', 'Success');
  }

  isAuthenticated() {
    return localStorage.getItem('token') !== null;
  }

  isAdmin() {
    return localStorage.getItem('isAdmin');
  }

  getToken(){
    let token = localStorage.getItem('token');
    return token;
  }
}