import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabindingAssignmentsComponent } from './databinding-assignments.component';

describe('DatabindingAssignmentsComponent', () => {
  let component: DatabindingAssignmentsComponent;
  let fixture: ComponentFixture<DatabindingAssignmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatabindingAssignmentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatabindingAssignmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
