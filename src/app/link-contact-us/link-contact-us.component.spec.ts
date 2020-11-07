import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkContactUsComponent } from './link-contact-us.component';

describe('LinkContactUsComponent', () => {
  let component: LinkContactUsComponent;
  let fixture: ComponentFixture<LinkContactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkContactUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
