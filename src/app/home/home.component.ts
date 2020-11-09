import { Component, OnInit } from '@angular/core';
import { ApartmentsService } from '../apartments.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ApartmentsService]
})
export class HomeComponent implements OnInit {

  constructor(private apartmentService: ApartmentsService) { }

  ngOnInit(): void {
  }

}
