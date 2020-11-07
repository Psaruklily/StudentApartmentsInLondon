import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkUniversitiesComponent } from './link-universities.component';

describe('LinkUniversitiesComponent', () => {
  let component: LinkUniversitiesComponent;
  let fixture: ComponentFixture<LinkUniversitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkUniversitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkUniversitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
