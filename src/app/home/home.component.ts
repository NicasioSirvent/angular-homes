import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from "../housing-location/housing-location.component";
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
  <section>
    <form>
      <input type="text" placeholder="Filter by city">
      <button class="primary" type="button">Search</button>
    </form>
  </section>
  <section class="results">
    <app-housing-location *ngFor="let housingLocation of housingLocationList"
      [housingLocation]="housingLocation">
    </app-housing-location>
  </section>
`,
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, HousingLocationComponent]
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  //pruebo a pasar como parametro a constructor, y funciona igual.
  housingService: HousingService = inject(HousingService);

  //constructor(private housingService: HousingService) {
  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}