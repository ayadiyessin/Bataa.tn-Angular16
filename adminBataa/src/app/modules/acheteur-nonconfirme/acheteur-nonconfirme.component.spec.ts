import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcheteurNonconfirmeComponent } from './acheteur-nonconfirme.component';

describe('AcheteurNonconfirmeComponent', () => {
  let component: AcheteurNonconfirmeComponent;
  let fixture: ComponentFixture<AcheteurNonconfirmeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcheteurNonconfirmeComponent]
    });
    fixture = TestBed.createComponent(AcheteurNonconfirmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
