import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitNonconfirmerComponent } from './produit-nonconfirmer.component';

describe('ProduitNonconfirmerComponent', () => {
  let component: ProduitNonconfirmerComponent;
  let fixture: ComponentFixture<ProduitNonconfirmerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProduitNonconfirmerComponent]
    });
    fixture = TestBed.createComponent(ProduitNonconfirmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
