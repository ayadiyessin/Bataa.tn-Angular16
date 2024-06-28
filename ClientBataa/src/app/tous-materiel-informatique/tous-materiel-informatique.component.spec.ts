import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TousMaterielInformatiqueComponent } from './tous-materiel-informatique.component';

describe('TousMaterielInformatiqueComponent', () => {
  let component: TousMaterielInformatiqueComponent;
  let fixture: ComponentFixture<TousMaterielInformatiqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TousMaterielInformatiqueComponent]
    });
    fixture = TestBed.createComponent(TousMaterielInformatiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
