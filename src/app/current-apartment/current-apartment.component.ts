/* import { ThrowStmt } from '@angular/compiler'; */
import { Component, OnInit } from '@angular/core';
import { ApartmentsService } from '../apartments.service';

@Component({
  selector: 'app-current-apartment',
  templateUrl: './current-apartment.component.html',
  styleUrls: ['./current-apartment.component.css'],
})
export class CurrentApartmentComponent implements OnInit {

  message:string;

  constructor(private apartmentsService: ApartmentsService) { }

  ngOnInit(): void {
  //  let apartment = localStorage.getItem('currentApartment');
  /* let apartment = JSON.parse(localStorage.getItem('currentApartment'));
    console.log(apartment)
    console.log(typeof(apartment)) */
      this.apartmentsService.currentMessage.subscribe(message => this.message = message) 
  }


}

