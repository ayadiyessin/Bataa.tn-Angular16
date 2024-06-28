import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TousImmobilierComponent } from './tous-immobilier.component';

describe('TousImmobilierComponent', () => {
  let component: TousImmobilierComponent;
  let fixture: ComponentFixture<TousImmobilierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TousImmobilierComponent]
    });
    fixture = TestBed.createComponent(TousImmobilierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
