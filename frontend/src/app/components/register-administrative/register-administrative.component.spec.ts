import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAdministrativeComponent } from './register-administrative.component';

describe('RegisterAdministrativeComponent', () => {
  let component: RegisterAdministrativeComponent;
  let fixture: ComponentFixture<RegisterAdministrativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterAdministrativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterAdministrativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
