import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { switchMap } from 'rxjs';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
    `
    img{
      width:100%;
      border-radius: 5px;
    }
    `
    ]
})
export class HeroeComponent implements OnInit {
 
  heroe! : Heroe; 
  constructor(
    private activeRouter : ActivatedRoute,
    private apiService : HeroesService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.activeRouter.params
    .pipe(
      switchMap( ({id}) =>  this.apiService.getHeroe( id) )
    )
    .subscribe( (resp) =>   this.heroe = resp)  
  }


  onRegresar(){
    this.router.navigate(['/heroes/listado']);
  }
   

}
