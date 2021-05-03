import {Component, OnInit, TemplateRef} from '@angular/core';
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  public form: FormGroup;
  public carsList: ICar[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
