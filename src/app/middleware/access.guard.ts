import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AccessGuard implements CanActivate {
  constructor(private authService: AuthService,private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     ;
    if (route.routeConfig?.path === "register") {
        return true
    }
    if (this.authService.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['register'])
    alert("You are not authorized to View this page. Please LogIn or Register");
    return false;
  }

}
