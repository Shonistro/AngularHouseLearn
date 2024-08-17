import { Component, inject } from '@angular/core';
import {CommonModule} from '@angular/common';
import { ActivatedRoute }  from "@angular/router";
import { HousingService } from "../core/housing.service";
import {HouseLocation} from "../models/house-location";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HouseLocation | undefined;





  applyForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(5)]),
    lastName: new FormControl('',[Validators.required, Validators.minLength(5)]),
    email: new FormControl('',[Validators.required, Validators.email])
  })

  constructor(){
   const housingLocationId = Number(this.route.snapshot.params['id']);
   this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
    console.log(this.housingLocation);
  }

  submitApplication(){
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
    );
  }

}
