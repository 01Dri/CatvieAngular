import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { ErrorCredentialsLoginComponent } from './components/error-credentials-login/error-credentials-login.component';



@NgModule({
  declarations: [
    ErrorDialogComponent,
    ErrorCredentialsLoginComponent

  ],
  imports: [
    AppMaterialModule,
    CommonModule
  ],
  exports: [ErrorDialogComponent]
})
export class SharedModule { }
