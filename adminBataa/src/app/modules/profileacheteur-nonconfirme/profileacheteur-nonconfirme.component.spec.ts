import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileacheteurNonconfirmeComponent } from './profileacheteur-nonconfirme.component';

describe('ProfileacheteurNonconfirmeComponent', () => {
  let component: ProfileacheteurNonconfirmeComponent;
  let fixture: ComponentFixture<ProfileacheteurNonconfirmeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileacheteurNonconfirmeComponent]
    });
    fixture = TestBed.createComponent(ProfileacheteurNonconfirmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
