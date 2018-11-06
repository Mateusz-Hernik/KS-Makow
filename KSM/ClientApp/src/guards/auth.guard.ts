import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthorizationGuard implements CanActivate {

  constructor(private router: Router, private auth: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
    if (this.auth.isLoggednIn()) {
      return true;
    } else {
      this.router.navigate(["admin/login"]);
      return false;
    }
  }
}

