import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogContentExampleProofverifiedComponent } from './dialog-content-example-proofverified.component';

describe('DialogContentExampleProofverifiedComponent', () => {
  let component: DialogContentExampleProofverifiedComponent;
  let fixture: ComponentFixture<DialogContentExampleProofverifiedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogContentExampleProofverifiedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogContentExampleProofverifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
