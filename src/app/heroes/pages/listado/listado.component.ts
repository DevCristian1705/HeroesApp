import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
    `
      .listaHeroes{
        background-color : green; 
       }
    `
  ]
})
export class ListadoComponent implements OnInit {

  listHeroes: Heroe[] = [];
  
  constructor(
    private apiService : HeroesService
  ) { }

  ngOnInit(): void {
    this.apiService.getListHeroes().subscribe((resp) => {
      this.listHeroes = resp; 
    })
  }

  
}
