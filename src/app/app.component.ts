import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [HomeComponent, RouterModule],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularVideoRSschool';
}
