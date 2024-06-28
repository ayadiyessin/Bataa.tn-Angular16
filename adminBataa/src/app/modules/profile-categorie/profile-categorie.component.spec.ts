import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCategorieComponent } from './profile-categorie.component';

describe('ProfileCategorieComponent', () => {
  let component: ProfileCategorieComponent;
  let fixture: ComponentFixture<ProfileCategorieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileCategorieComponent]
    });
    fixture = TestBed.createComponent(ProfileCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
