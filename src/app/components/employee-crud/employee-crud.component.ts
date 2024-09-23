import { Component } from '@angular/core';
import { EmployeeTableComponent } from '../employee-table/employee-table.component';
import { EmployeeAddComponent } from '../employee-add/employee-add.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-crud',
  standalone: true,
  imports: [
    CommonModule,
    EmployeeTableComponent,
    EmployeeAddComponent
  ],
  templateUrl: './employee-crud.component.html',
  styleUrl: './employee-crud.component.css'
})
export class EmployeeCrudComponent {
  employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
    { eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
  ];
  selectedEmployee: any = {};

  editEmployee(emp: any) {
    this.selectedEmployee = emp;
  }

  addEmployee(newEmpObj: any) {
    this.employees.push(newEmpObj);
  }
  deleteEmployee(eId: number) {
    this.employees = this.employees.filter(emp => {
      return emp.eId != eId;
    })
  }
}
