import { IformCandeactivate } from '../../guard/iform-candeactivate';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonagensDeactiveGuard implements CanDeactivate<IformCandeactivate> {
  
  canDeactivate(
    component: IformCandeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      console.log ('guarda de desativação');

      return component.podeDesativar();
  }
}
