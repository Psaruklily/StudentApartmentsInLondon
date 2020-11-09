import { Component, OnInit } from '@angular/core';
import { ApartmentsService } from '../apartments.service';

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.css'],
  providers: [ApartmentsService]
})
export class ApartmentComponent implements OnInit {

  apartments: object[] = [];

  constructor(private apartmentsService: ApartmentsService) { }

  ngOnInit(): void {
   this.apartments = this.apartmentsService.getApartments();
  }

}
