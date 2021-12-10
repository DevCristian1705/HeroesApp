import { Component, Inject } from '@angular/core'; 
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-eliminar-heroe',
  templateUrl: './eliminar-heroe.component.html',
  styleUrls: ['./eliminar-heroe.component.css']
})
export class EliminarHeroeComponent  {
 
  constructor(
    public dialogRef: MatDialogRef<EliminarHeroeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Heroe,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }


}
