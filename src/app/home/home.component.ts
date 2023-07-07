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
        <!-- set template variable #filter to get access to the input as its value -->
        <input type="text" placeholder="Filter by city" #filter />
        <button
          class="primary"
          type="button"
          (click)="filterResults(filter.value)"
        >
          Search By City
        </button>
      </form>
    </section>
    <section class="results">
      <!-- property binding to a component tag [...]="value" -->
      <app-housing-location
        *ngFor="let housingLocation of filteredLocationList"
        [housingLocation]="housingLocation"
      ></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  // property
  // array property for filtering  housingLocation.
  filteredLocationList: Housinglocation[] = [];
  housingLocation: Housinglocation[] = [];
  housingService: HousingService = inject(HousingService);

  // use async version of the getAllHousingLocations function
  constructor() {
    this.housingService
      .getAllHousingLocations()
      .then((housingLocationList: Housinglocation[]) => {
        this.housingLocation = housingLocationList;
        this.filteredLocationList = housingLocationList;
      });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocation;
    }

    this.filteredLocationList = this.housingLocation.filter((housingL) =>
      housingL?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}
