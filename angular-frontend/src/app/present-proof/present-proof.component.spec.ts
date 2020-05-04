import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentProofComponent } from './present-proof.component';

describe('PresentProofComponent', () => {
  let component: PresentProofComponent;
  let fixture: ComponentFixture<PresentProofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentProofComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentProofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
