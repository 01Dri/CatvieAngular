import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, catchError, of } from 'rxjs';
import { FilmsServiceService } from 'src/app/services/film-services/films-service.service';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';




@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent {

  films$: Observable<any[]>;
  constructor(private filmServices: FilmsServiceService, public dialog: MatDialog) {
    this.films$ = this.filmServices.findAll()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar os filmes.')
        return of([])
      })
    )
    ;
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
      });
  }
}

