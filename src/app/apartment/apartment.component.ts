import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApartmentsService } from '../apartments.service';

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.css'],
})
export class ApartmentComponent implements OnInit {
  
@Input() apartment;

/* apartments: object[] = []; */

@Output() currentApartment = new EventEmitter();
redirectToCurrentApartment(){
  this.currentApartment.emit();
}

  constructor(private apartmentsService: ApartmentsService) { }

  @Output() transfertoHome = new EventEmitter();
  eventTransfer($event){
    this.transfertoHome.emit($event);
  }

  ngOnInit(): void {
  /*   this.apartments = this.apartmentsService.getApartments();
    console.log(this.apartments) */
  }

}
