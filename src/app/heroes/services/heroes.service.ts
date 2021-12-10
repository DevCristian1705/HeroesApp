import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Heroe } from '../interfaces/heroe.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  apiUrl : string = environment.apuUrl;

  constructor(
    private http : HttpClient
  ) { 
    
  }

  getListHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${this.apiUrl}/heroes`);
  }

  getHeroe(heroe : string): Observable<Heroe>{
    return this.http.get<Heroe>(`${this.apiUrl}/heroes/${heroe}`);
  }

  getHeroeFiltro(termino : string): Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.apiUrl}/heroes?q=${termino}&_limit=6`)
  }

  addHeroe(heroe : Heroe): Observable<Heroe>{
    return this.http.post<Heroe>(`${this.apiUrl}/heroes`, heroe)
  }

  updateHeroe(heroe : Heroe): Observable<Heroe>{
    return this.http.put<Heroe>(`${this.apiUrl}/heroes/${heroe.id}`, heroe)
  }

  deleteHeroe( idheroe : string): Observable<any>{
    return this.http.delete<any>(`${this.apiUrl}/heroes/${idheroe}`)
  }

}
