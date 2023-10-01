import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from '../models/car.model';
import { CarService } from '../car.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css'],
})
export class AddCarComponent {
  car: Car = {
    id: 0,
    make: '',
    model: '',
    year: 0,
    repairs: [],
  };

  constructor(private carService: CarService, private router: Router) {}

  addCar() {
    this.car.id = new Date().getTime();
    this.carService.addCar(this.car);
    this.router.navigate(['']);
  }
}