import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import { NavbarComponent } from './components/navbar/navbar.component';
import {NgModule} from '@angular/core';
import {environment} from '../environments/environment';
import { CreateCarComponent } from './components/create-car/create-car.component';
import { CarsComponent } from './components/cars/cars.component';
import { CarsDetailsComponent } from './components/cars-details/cars-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreateCarComponent,
    CarsComponent,
    CarsDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
