import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      housing-location works!
    </p>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  //non-null assertion operator to notify the compiler that the value of the new property won't be null or undefined.
  //Inputs allow components to share data. The direction of the data sharing is from parent component to child component.
  @Input() housingLocation! : HousingLocation;
}
