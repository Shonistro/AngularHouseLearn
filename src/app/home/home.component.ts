import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HouseLocationComponent} from "../house-location/house-location.component";
import {HouseLocation} from "../models/house-location";
import {HousingService} from "../core/housing.service"

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HouseLocationComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housingLocationList: HouseLocation[] = [];

  housingService: HousingService = inject(HousingService)

  constructor(){
    this.housingLocationList = this.housingService.getAllHousingLocations()
  }
}
