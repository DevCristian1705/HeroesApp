import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { EliminarHeroeComponent } from '../../component/eliminar-heroe/eliminar-heroe.component';
import { Heroe, Publisher } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
    `
    .formAdd{
      margin:1%;
    }

    img{
      width:100%;
      border-radius: 5px;
    }
    `
  ],
  
})
export class AgregarComponent implements OnInit {

  titulo : string = ""; 


  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ]

  heroe: Heroe = {
    superhero : "",
    alter_ego: "",
    characters: "",
    first_appearance:"",
    publisher: Publisher.DCComics,
    alt_img: ""
      
      
  }

  constructor(
    private apiService: HeroesService,
    private activatedRoute : ActivatedRoute,
    private router : Router,
    private snackbar : MatSnackBar,
    private dialog : MatDialog
  ) { }

  ngOnInit(): void {
    if(!this.router.url.includes('editar')){ 
      return;
    }

    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.apiService.getHeroe(id))
    ).subscribe(resp => this.heroe = resp)
  }

  onGrabar(){
    if(this.heroe.superhero.trim().length === 0){
      return;
    }

    if(this.heroe.id){
      this.apiService.updateHeroe(this.heroe).subscribe(resp  => {
        this.onMensaje("Se actualizaron los datos del Heroe: " + resp.superhero)
        this.router.navigate(['heroes/editar', resp.id]);
      });
    }else{
      this.apiService.addHeroe(this.heroe).subscribe(resp  => {
        this.onMensaje("Se creó al Heroe: " + this.heroe.superhero)
        this.router.navigate(['heroes/editar', resp.id]);
      });
    }
  }

  onEliminar(){ 
    const dialogRef = this.dialog.open(EliminarHeroeComponent, {
      width: '250px',
      data: this.heroe,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.apiService.deleteHeroe(result.id!).subscribe(resp => {
        this.onMensaje("Se eliminó al Heroe: " + this.heroe.superhero)
        this.router.navigate(['heroes']);
      })
    });

  
  }

  onMensaje( mensaje : string){
    this.snackbar.open(
      mensaje, 'ok!',{
        duration: 2500
      })
  }
  
}
 