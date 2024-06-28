import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileProduitComponent } from './profile-produit.component';

describe('ProfileProduitComponent', () => {
  let component: ProfileProduitComponent;
  let fixture: ComponentFixture<ProfileProduitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileProduitComponent]
    });
    fixture = TestBed.createComponent(ProfileProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
