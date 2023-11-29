import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';




@NgModule({
  exports: [
    MatProgressSpinnerModule,
    MatDialogModule,
    MatButtonModule
  ]
})
export class AppMaterialModule { }
