import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablishConnectionVerifierComponent } from './establish-connection-verifier.component';

describe('EstablishConnectionVerifierComponent', () => {
  let component: EstablishConnectionVerifierComponent;
  let fixture: ComponentFixture<EstablishConnectionVerifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstablishConnectionVerifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstablishConnectionVerifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
