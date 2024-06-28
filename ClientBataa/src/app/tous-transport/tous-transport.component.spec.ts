import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TousTransportComponent } from './tous-transport.component';

describe('TousTransportComponent', () => {
  let component: TousTransportComponent;
  let fixture: ComponentFixture<TousTransportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TousTransportComponent]
    });
    fixture = TestBed.createComponent(TousTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
