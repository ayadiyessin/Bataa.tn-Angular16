import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnchereComponent } from './enchere.component';

describe('EnchereComponent', () => {
  let component: EnchereComponent;
  let fixture: ComponentFixture<EnchereComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnchereComponent]
    });
    fixture = TestBed.createComponent(EnchereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
