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

  isFormValid(fieldName: string) {
    const field = this.applyForm.get(fieldName);

    return field!.invalid && (field!.dirty || field!.touched)
  }

  isFormErrors(fieldName: string): string[] {
    const errors:string[] = [];
    const field = this.applyForm.get(fieldName);

    if (field!.errors?.['required']) {
      errors.push(`${fieldName} field is required `)
    }
    if (field!.errors?.['minlength']) {
      errors.push(`${fieldName} min length field < 5`)
    }
    if(field!.errors?.['email']){
      errors.push(`${fieldName} email format not valid`)
    }

    console.log(errors)

    return errors
  }


  applyForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(5)]),
    lastName: new FormControl('',[Validators.required, Validators.minLength(5)]),
    email: new FormControl('',[Validators.required, Validators.email])
  })

  constructor(){
   const housingLocationId = Number(this.route.snapshot.params['id']);
  this.housingService.getHousingLocationById(housingLocationId).then(housingLocation => {
    this.housingLocation = housingLocation;
  })

  }

  submitApplication(){
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
    );
  }

}
