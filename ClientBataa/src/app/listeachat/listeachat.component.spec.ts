import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeachatComponent } from './listeachat.component';

describe('ListeachatComponent', () => {
  let component: ListeachatComponent;
  let fixture: ComponentFixture<ListeachatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeachatComponent]
    });
    fixture = TestBed.createComponent(ListeachatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
