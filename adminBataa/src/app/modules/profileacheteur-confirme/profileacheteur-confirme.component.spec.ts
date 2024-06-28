import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileacheteurConfirmeComponent } from './profileacheteur-confirme.component';

describe('ProfileacheteurConfirmeComponent', () => {
  let component: ProfileacheteurConfirmeComponent;
  let fixture: ComponentFixture<ProfileacheteurConfirmeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileacheteurConfirmeComponent]
    });
    fixture = TestBed.createComponent(ProfileacheteurConfirmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
