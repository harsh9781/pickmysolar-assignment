import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {UserdetailsService} from '../core/services/userdetails.service'


@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
    constructor(private userdetailsService:UserdetailsService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.userdetailsService.getUserRole() == 'admin'){
        
      return true;
    }
    else{
      return false;
    }
  }
  
}
