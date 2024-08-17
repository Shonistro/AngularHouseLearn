import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { provideRouter } from '@angular/router';
import { AppModule } from './app/app.module';
import  routeConfig from './routes'
import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";


bootstrapApplication(AppComponent,{
  providers: [
    provideRouter(routeConfig)
  ]
}).catch(err => console.error(err));


