import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-bg-image',
  templateUrl: './btn-bg-image.component.html',
  styleUrls: ['./btn-bg-image.component.css']
})
export class BtnBgImageComponent implements OnInit {

  constructor() { }

  btnTitle: string = 'COVID-19 Policy'

  ngOnInit(): void {
  }

}
