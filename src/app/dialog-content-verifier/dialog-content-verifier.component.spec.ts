import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogContentVerifierComponent } from './dialog-content-verifier.component';

describe('DialogContentVerifierComponent', () => {
  let component: DialogContentVerifierComponent;
  let fixture: ComponentFixture<DialogContentVerifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogContentVerifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogContentVerifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
