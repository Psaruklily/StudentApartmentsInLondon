import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnBgImageComponent } from './btn-bg-image.component';

describe('BtnBgImageComponent', () => {
  let component: BtnBgImageComponent;
  let fixture: ComponentFixture<BtnBgImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnBgImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnBgImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
