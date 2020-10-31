
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockdataService {

  description = {
    title: 'A Mock Test',
    description: 'A Mock company ',
    address: 'Static, ',
    city: ' Mumbai, ',
    state: 'Maharashtra ',
    pincode: '400057'
  }
  cities = ['Mumbai', 'Pune', 'Nashik', 'Nagar', 'Nagpur']
  constructor() { }

  getCities() {
    return of(this.cities)
  }

  getCompanyData() {
    return of(this.description)
  }
}
