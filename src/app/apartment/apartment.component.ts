import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.css']
})
export class ApartmentComponent implements OnInit {

@Input() apartment;

@Output() currentApartment = new EventEmitter();
redirectToCurrentApartment(){
  this.currentApartment.emit();
}

  constructor() { }

  ngOnInit(): void {
  }

}
