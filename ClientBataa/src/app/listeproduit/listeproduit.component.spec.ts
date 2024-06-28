import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeproduitComponent } from './listeproduit.component';

describe('ListeproduitComponent', () => {
  let component: ListeproduitComponent;
  let fixture: ComponentFixture<ListeproduitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeproduitComponent]
    });
    fixture = TestBed.createComponent(ListeproduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
