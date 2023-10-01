import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { AddCarComponent } from './add-car/add-car.component';
import { AddRepairComponent } from './add-repair/add-repair.component';

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CarDetailsComponent,
    AddCarComponent,
    AddRepairComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
