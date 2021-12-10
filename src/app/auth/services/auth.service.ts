import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAuth } from '../interface/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl : string = environment.apuUrl;
  private _auth : IAuth | undefined;


  get auth(): IAuth{
    return { ...this._auth! }
  }

  constructor(
    private http : HttpClient
  ) { }


  verificarAutenticacion(): Observable<boolean>{
    if(!localStorage.getItem('id')){
      return of(false);
    }

    return this.http.get<IAuth>(`${this.baseUrl}/usuarios/1`)
    .pipe(
      map( resp => { console.log(resp); return true})
    );

  }

  login(){
    return this.http.get<IAuth>(`${this.baseUrl}/usuarios/1`)
    .pipe(
      tap(resp => this._auth = resp),
      tap(resp => localStorage.setItem('id', resp.id))
    );
  }

  loguot(){ 
    this._auth = undefined
    localStorage.removeItem('id');
  }
}
