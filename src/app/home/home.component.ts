import { Component, OnInit } from '@angular/core';
import { ApartmentsService } from '../apartments.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ApartmentsService]
})
export class HomeComponent implements OnInit {

  apartments: Object[] = [];

  constructor(private apartmentsService: ApartmentsService,
    private router: Router) { }

     goToApartment(){
       this.router.navigate(['/currentApartment']);
    } 

  ngOnInit(): void {
    this.apartments = this.apartmentsService.getApartments();
  }

}
