import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifiedProofComponent } from './verified-proof.component';

describe('VerifiedProofComponent', () => {
  let component: VerifiedProofComponent;
  let fixture: ComponentFixture<VerifiedProofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifiedProofComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifiedProofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
