import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogContentProofverifiedComponent } from './dialog-content-proofverified.component';

describe('DialogContentProofverifiedComponent', () => {
  let component: DialogContentProofverifiedComponent;
  let fixture: ComponentFixture<DialogContentProofverifiedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogContentProofverifiedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogContentProofverifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
