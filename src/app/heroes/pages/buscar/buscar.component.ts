import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  heroes : Heroe[] = [];
  termino : string = "";
  heroeSeleccionado : Heroe | undefined;

  constructor(
    private apiServie : HeroesService
  ) { }

  ngOnInit(): void { 
  }

  onBuscando(){
    this.apiServie.getHeroeFiltro(this.termino.trim()).subscribe((resp) => { 
        this.heroes = resp; 
    })
  }

  onHeroeSeleccionado(event : MatAutocompleteSelectedEvent){ 

    if(!event.option.value){
      this.heroeSeleccionado = undefined;
      console.log('no hay valor');
      return;
    }
  
    const heroe : Heroe = event.option.value; 
    this.termino = heroe.superhero; 
    this.apiServie.getHeroe( heroe.id!).subscribe((resp) => {
      this.heroeSeleccionado = resp
    })
  }

  onLimpiar(){
    this.heroeSeleccionado = undefined;
    this.termino = "";
  }
}
