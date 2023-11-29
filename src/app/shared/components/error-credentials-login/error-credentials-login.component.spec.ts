import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorCredentialsLoginComponent } from './error-credentials-login.component';

describe('ErrorCredentialsLoginComponent', () => {
  let component: ErrorCredentialsLoginComponent;
  let fixture: ComponentFixture<ErrorCredentialsLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorCredentialsLoginComponent]
    });
    fixture = TestBed.createComponent(ErrorCredentialsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
