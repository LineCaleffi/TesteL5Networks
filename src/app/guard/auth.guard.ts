import { AuthService } from './../login/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  
  constructor(private authService: AuthService, private router: Router){}
  
  private verificarAcesso(){
    if (this.authService.usuarioEstaAutenticado()){
      return true;
    }

    this.router.navigate(['/login']);
    
    return false;
  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log('canActivate');

      return this.verificarAcesso();
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log('canLoad');
    return this.verificarAcesso();
  }
  
}
