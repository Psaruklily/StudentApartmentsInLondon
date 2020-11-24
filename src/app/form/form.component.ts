import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
/* import { FormGroup } from '@angular/forms'; */

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

@Input() currentApartment;
currentStudent: FormGroup;

  constructor() { 
    this.currentStudent = new FormGroup({
      "studentFirstName": new FormControl('Lilya', Validators.required),
      "studentLastName": new FormControl('Psaruk', Validators.required),
      "studentPhone": new FormControl('', Validators.pattern("[\(]{0,1}[\+][0-9]{3}[\)]{0,1}[ ]?[0-9]{2}[-][0-9]{3}[-][0-9]{2}[-][0-9]{2}")),
      "studentEmail": new FormControl('', Validators.required)
    })
  }
  
  ngOnInit(): void {
  }

  submit(){
    console.log(this.currentStudent);
  }
}
