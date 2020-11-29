import { Component, ElementRef, Input, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApartmentsService } from '../apartments.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [ApartmentsService]
})
export class FormComponent implements OnInit {

  @Input() currentApartment;
  currentStudent: FormGroup;
  isInvalidForm = true;
  isValidForm = true;
  showHidePhone = true;
  infoAboutCountries = [];
  country$;

  @ViewChild('name', {static: false})
nameCountry: ElementRef;

@ViewChild('native', {static: false})
nativeCountryName: ElementRef;

  constructor(private apartmentsService: ApartmentsService,
    private renderer: Renderer2) {
    this.currentStudent = new FormGroup({
      "studentFirstName": new FormControl('Lilya', [
        Validators.required,
        Validators.pattern("[a-zA-Z]{2,}")
      ]),
      "studentLastName": new FormControl('Psaruk', [
        Validators.required,
        Validators.pattern("[a-zA-Z]{2,}")
      ]),
      "studentPhone": new FormControl('', Validators.pattern("[\(]{0,1}[\+][0-9]{3}[\)]{0,1}[ ]?[0-9]{2}[-][0-9]{3}[-][0-9]{2}[-][0-9]{2}")),
      "studentEmail": new FormControl(null, Validators.email)
    })

  }

  ngOnInit(): void {
 this.apartmentsService.getFlafAndPhones().subscribe(function (countries) {
      this.infoAboutCountries = countries;
        console.log(this.infoAboutCountries);
      }); 
  
      this.country$ = this.apartmentsService.getFlafAndPhones();
      console.log(this.country$)
  }

  submit() {
    console.log(this.currentStudent);
  }

  showPhones(): void {
    this.showHidePhone = !this.showHidePhone;
  }
}
