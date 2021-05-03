import { Component, OnInit } from '@angular/core';

import { ICar } from '../models/ICar';

@Component({
  selector: 'app-cars-details',
  templateUrl: './cars-details.component.html',
  styleUrls: ['./cars-details.component.scss']
})
export class CarsDetailsComponent implements OnInit {

  public carDetails: ICar;

  constructor() { }

  ngOnInit(): void {
  }

}
