import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { FormsModule } from '@angular/forms';
import { ChartInputComponent } from './chart-input/chart-input.component';
@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    ChartInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
