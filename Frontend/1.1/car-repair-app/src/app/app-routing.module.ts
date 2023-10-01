import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarListComponent } from './car-list/car-list.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { AddCarComponent } from './add-car/add-car.component';

const routes: Routes = [
  { path: '', component: CarListComponent },
  { path: 'car-details/:id', component: CarDetailsComponent },
  { path: 'add-car', component: AddCarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}