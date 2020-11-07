import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkFAQsComponent } from './link-faqs.component';

describe('LinkFAQsComponent', () => {
  let component: LinkFAQsComponent;
  let fixture: ComponentFixture<LinkFAQsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkFAQsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkFAQsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
