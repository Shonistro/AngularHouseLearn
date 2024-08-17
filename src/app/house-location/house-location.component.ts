import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  HouseLocation } from '../models/house-location'
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-house-location',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './house-location.component.html',
  styleUrls: ['./house-location.component.css']
})
export class HouseLocationComponent {
    @Input() houseLocation!: HouseLocation;
}
