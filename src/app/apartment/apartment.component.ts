import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.css']
})
export class ApartmentComponent implements OnInit {

@Input() apartment: Object;

  constructor() { }

  ngOnInit(): void {
  }

}
