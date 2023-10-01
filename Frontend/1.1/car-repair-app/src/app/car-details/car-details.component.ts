import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Car } from '../models/car.model';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css'],
})
export class CarDetailsComponent implements OnInit {
  car: Car | null = null;

  constructor(
    private route: ActivatedRoute,
    private carService: CarService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const carId = Number(params.get('id'));
      this.car = this.carService.getCars().find((c) => c.id === carId) || null;
    });
  }
}