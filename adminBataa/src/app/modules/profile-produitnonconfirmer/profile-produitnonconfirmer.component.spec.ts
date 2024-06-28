import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileProduitnonconfirmerComponent } from './profile-produitnonconfirmer.component';

describe('ProfileProduitnonconfirmerComponent', () => {
  let component: ProfileProduitnonconfirmerComponent;
  let fixture: ComponentFixture<ProfileProduitnonconfirmerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileProduitnonconfirmerComponent]
    });
    fixture = TestBed.createComponent(ProfileProduitnonconfirmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
