import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesHttpComponent } from './employees-http.component';

describe('EmployeesHttpComponent', () => {
  let component: EmployeesHttpComponent;
  let fixture: ComponentFixture<EmployeesHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeesHttpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
