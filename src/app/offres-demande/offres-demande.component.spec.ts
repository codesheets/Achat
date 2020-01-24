import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffresDemandeComponent } from './offres-demande.component';

describe('OffresDemandeComponent', () => {
  let component: OffresDemandeComponent;
  let fixture: ComponentFixture<OffresDemandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffresDemandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffresDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
