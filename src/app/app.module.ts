import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HouseLocationComponent } from './house-location/house-location.component';
import {RouterModule, RouterOutlet} from '@angular/router';

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    HomeComponent,
    HouseLocationComponent,
    RouterOutlet,
    AppComponent,
    RouterModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
