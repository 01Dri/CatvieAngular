import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultsComponent } from './components/results/results.component';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  { path: 'results' , component: ResultsComponent },
  { path: 'layout' , component: LayoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
