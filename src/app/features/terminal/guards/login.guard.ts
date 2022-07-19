import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import DatabaseService from "../services/database.service";

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor( private readonly _services: DatabaseService,private readonly _router: Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isAllowed = !!this._services.getUser();

    // if(!isAllowed){ this._router.navigate(['forbidden']) }

    // return isAllowed;
    return true;
  }

}
