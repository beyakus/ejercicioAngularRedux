import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/***Import Redux****/
import { StoreModule } from '@ngrx/store';
import { contadorReduce } from './contador/contador.reduce';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ contador: contadorReduce })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
