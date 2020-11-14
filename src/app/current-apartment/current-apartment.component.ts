import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-apartment',
  templateUrl: './current-apartment.component.html',
  styleUrls: ['./current-apartment.component.css']
})
export class CurrentApartmentComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {
  //  let apartment = localStorage.getItem('currentApartment');
  let apartment = JSON.parse(localStorage.getItem('currentApartment'));
    console.log(apartment)
    console.log(typeof(apartment))
  }

}

