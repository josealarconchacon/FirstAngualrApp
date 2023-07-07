import { Injectable } from '@angular/core';
import { Housinglocation } from './housinglocation';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  // npm install -g json-server
  // Have to run -> json-server --watch db.json in the cli in order to get the app to work
  url = 'http://localhost:3000/locations';

  // uses asynchronous code to make a get request over HTTP
  async getAllHousingLocations(): Promise<Housinglocation[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  // make a call to the web server
  async getHousingLocationById(
    id: number
  ): Promise<Housinglocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }
  // Submit Method
  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`
    );
  }
}
