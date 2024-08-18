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
  filteredLocationList: HouseLocation[] = [];


  constructor(){
     this.housingService.getAllHousingLocations().then((housingLocationList: HouseLocation[] ) =>{
       this.housingLocationList = housingLocationList;
       this.filteredLocationList = housingLocationList;
     })
  }


  filteredResult(text:string){
    if(!text) this.filteredLocationList = this.housingLocationList


    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation.city.toLowerCase().includes(text.toLowerCase())
    )

  }


}
