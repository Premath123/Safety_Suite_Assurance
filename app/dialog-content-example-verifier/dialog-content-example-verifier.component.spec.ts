import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogContentExampleVerifierComponent } from './dialog-content-example-verifier.component';

describe('DialogContentExampleVerifierComponent', () => {
  let component: DialogContentExampleVerifierComponent;
  let fixture: ComponentFixture<DialogContentExampleVerifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogContentExampleVerifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogContentExampleVerifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
