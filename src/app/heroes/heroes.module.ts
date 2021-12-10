import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroresRoutingModule } from './herores-routing.module';

import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { TarjetaHeroeComponent } from './component/tarjeta-heroe/tarjeta-heroe.component';
import { HeroeImagenPipe } from './pipes/heroe-imagen.pipe';
import { FormsModule } from '@angular/forms';
import { EliminarHeroeComponent } from './component/eliminar-heroe/eliminar-heroe.component';



@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    HeroeComponent,
    HomeComponent,
    ListadoComponent,
    TarjetaHeroeComponent,
    HeroeImagenPipe,
    EliminarHeroeComponent
  ],
  imports: [
    CommonModule,
    HeroresRoutingModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule
  ]
  
})
export class HeroesModule { }
