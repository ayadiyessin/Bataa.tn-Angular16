import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutreInformatiqueComponent } from './autre-informatique.component';

describe('AutreInformatiqueComponent', () => {
  let component: AutreInformatiqueComponent;
  let fixture: ComponentFixture<AutreInformatiqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutreInformatiqueComponent]
    });
    fixture = TestBed.createComponent(AutreInformatiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
