import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkExpiriencesComponent } from './link-expiriences.component';

describe('LinkExpiriencesComponent', () => {
  let component: LinkExpiriencesComponent;
  let fixture: ComponentFixture<LinkExpiriencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkExpiriencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkExpiriencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
