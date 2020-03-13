import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartInputComponent } from './chart-input/chart-input.component';

const routes: Routes = [
  { path: '', redirectTo: 'chart', pathMatch: 'full' },
  { path: 'chart', component: ChartInputComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
