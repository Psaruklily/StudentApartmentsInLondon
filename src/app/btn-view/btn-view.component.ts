import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
 import { ApartmentsService } from '../apartments.service';

@Component({
  selector: 'app-btn-view',
  templateUrl: './btn-view.component.html',
  styleUrls: ['./btn-view.component.css']
})
export class BtnViewComponent implements OnInit {

  @Input() apartment;


  constructor(private apartmentsService: ApartmentsService) { }

  /* apartments: object[] = []; */

@Output() clickedBtn = new EventEmitter();

onClick(id){
  this.clickedBtn.emit(id);
  //console.log(this.apartment)
  /* this.id = this.apartmentsService.getApartmentById(this.apartment['id']);  */
  localStorage.setItem('currentApartment',  JSON.stringify(this.apartment));
}

  ngOnInit(): void {
    
     //console.log(this.id)
  }

}
