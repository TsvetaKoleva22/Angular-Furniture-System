import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private authService : AuthService,
    private router : Router
  ) { }

  canActivate(){
    
    if (this.authService.isAdmin() === 'true') {
      return true;
    }  

    this.router.navigate(['/signin']);
    
    return false;
  }
}