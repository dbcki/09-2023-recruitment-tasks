import { Injectable } from '@angular/core';
import { Car } from './models/car.model';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private cars: Car[] = [];

  constructor() {
    const storedCars = localStorage.getItem('cars');
    if (storedCars) {
      this.cars = JSON.parse(storedCars);
    }
  }

  addCar(car: Car) {
    this.cars.push(car);
    this.saveCarsToLocalStorage();
  }

  getCars() {
    return this.cars;
  }

  addRepair(carId: number, repair: { part: string; cost: number }) {
    const car = this.cars.find((c) => c.id === carId);
    if (car) {
      car.repairs.push(repair);
      this.saveCarsToLocalStorage();
    }
  }

  private saveCarsToLocalStorage() {
    localStorage.setItem('cars', JSON.stringify(this.cars));
  }
}