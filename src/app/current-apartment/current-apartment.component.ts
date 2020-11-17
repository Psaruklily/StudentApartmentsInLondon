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
  currentApartment: Object;
  slides: Object[];

  constructor(private apartmentsService: ApartmentsService) { }

  ngOnInit(): void {
    this.apartmentsService.currentMessage.subscribe(message => this.message = message);
    this.currentApartment = this.apartmentsService.getApartmentById(this.message);
    this.slides = this.currentApartment['slides'];
    console.log(this.slides)
      
  }


  


}

