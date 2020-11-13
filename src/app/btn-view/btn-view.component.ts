import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
/* import { ApartmentsService } from '../apartments.service'; */

@Component({
  selector: 'app-btn-view',
  templateUrl: './btn-view.component.html',
  styleUrls: ['./btn-view.component.css']
})
export class BtnViewComponent implements OnInit {

  @Input() apartment: Object;


  constructor() { }

  /* apartments: object[] = []; */

@Output() clickedBtn = new EventEmitter();

onClick(){
  this.clickedBtn.emit();
}

  ngOnInit(): void {
    /* this.id = this.apartmentsService.getApartmentById(3); */
  }

}
