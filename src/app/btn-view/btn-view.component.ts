import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
 import { ApartmentsService } from '../apartments.service';

@Component({
  selector: 'app-btn-view',
  templateUrl: './btn-view.component.html',
  styleUrls: ['./btn-view.component.css'],
})
export class BtnViewComponent implements OnInit {

  @Input() apartment;

  constructor(private apartmentsService: ApartmentsService) { }

@Output() clickedBtn = new EventEmitter();

  ngOnInit(): void {
  }

  onClick(id){
    this.clickedBtn.emit(id);
  }

   newMessage(name) {
    this.apartmentsService.changeMessage(name);
  } 

}
