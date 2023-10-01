import { Component, Input } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-add-repair',
  templateUrl: './add-repair.component.html',
  styleUrls: ['./add-repair.component.css'],
})
export class AddRepairComponent {
  @Input() carId: number | null = null;
  part: string = '';
  cost: number | null = null;

  constructor(private carService: CarService) {}

  addRepair() {
    if (this.carId !== null && this.part && this.cost !== null && this.cost > 0) {
      this.carService.addRepair(this.carId, { part: this.part, cost: this.cost });
      this.part = '';
      this.cost = null;
    }
  }
}