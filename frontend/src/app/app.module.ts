import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import {enableProdMode} from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent} from './detail/detail.Component';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    AddComponent
  ],

  
  imports: [
    BrowserModule,
    BrowserModule, HttpModule, FormsModule,
    RouterModule.forRoot([
      { path : '', component : HomeComponent },
      { path : 'add', component : AddComponent },
      { path : 'details', component : DetailComponent },
      
      
  
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
enableProdMode();