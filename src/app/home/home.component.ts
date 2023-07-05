import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingService } from '../housing.service';
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form class="form-search" method="get" action="#">
        <input type="text" placeholder="Filter by city" />
        <button type="button">Search By City</button>
      </form>
    </section>
    <section class="results">
      <!-- property binding to a component tag [...]="value" -->
      <app-housing-location
        *ngFor="let housingLocation of housingLocation"
        [housingLocation]="housingLocation"
      ></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  housingLocation: Housinglocation[] = [];
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocation = this.housingService.getAllHousingLocations();
  }
}
