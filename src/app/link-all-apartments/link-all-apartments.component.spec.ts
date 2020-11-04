import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkAllApartmentsComponent } from './link-all-apartments.component';

describe('LinkAllApartmentsComponent', () => {
  let component: LinkAllApartmentsComponent;
  let fixture: ComponentFixture<LinkAllApartmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkAllApartmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkAllApartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
