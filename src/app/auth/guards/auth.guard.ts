import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad  {

constructor(
  private authService: AuthService,
  private router : Router
){}

canActivate(
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
 
  console.log('bloqueado por CANACTIVE');
  
  return  this.authService.verificarAutenticacion()
    .pipe(
      tap( estadoAutenticado => {
        if(!estadoAutenticado){
          this.router.navigate(['./auth/login'])
        }
      })
    );
}


canLoad(
  route: Route,
  segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    return this.authService.verificarAutenticacion()
      .pipe(
        tap( estadoAutenticado => {
          if(!estadoAutenticado){
            this.router.navigate(['./auth'])
          }
        })
      );

  }
}
