import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcheteurConfirmeComponent } from './acheteur-confirme.component';

describe('AcheteurConfirmeComponent', () => {
  let component: AcheteurConfirmeComponent;
  let fixture: ComponentFixture<AcheteurConfirmeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcheteurConfirmeComponent]
    });
    fixture = TestBed.createComponent(AcheteurConfirmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
