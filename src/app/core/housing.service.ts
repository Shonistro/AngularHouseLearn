import { Injectable } from '@angular/core';
import { HouseLocation } from "../models/house-location";

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url = 'http://localhost:3000/location'

  constructor() { }

  async getAllHousingLocations() : Promise<HouseLocation[]>{
      const data = await fetch(this.url)
      return await data.json() ?? []
  }

  async getHousingLocationById(id:number): Promise<HouseLocation | undefined>  {
    const data = await fetch(`${this.url}/${id}`)
    return await data.json() ?? {};
  }

  submitApplication(firstName:string, lastName:string, email:string){
    console.log(firstName, lastName, email)
  }
}
