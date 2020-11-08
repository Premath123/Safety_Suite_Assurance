import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestCredentialComponent } from './request-credential.component';

describe('RequestCredentialComponent', () => {
  let component: RequestCredentialComponent;
  let fixture: ComponentFixture<RequestCredentialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestCredentialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestCredentialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
