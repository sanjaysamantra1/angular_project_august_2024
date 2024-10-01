import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-employees-http',
  standalone: true,
  imports: [],
  templateUrl: './employees-http.component.html',
  styleUrl: './employees-http.component.css'
})
export class EmployeesHttpComponent {
  allEmployees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {
  }
  fetchEmployees() {
    this.employeeService.getAllEmployees().subscribe((response: Employee[]) => {
      this.allEmployees = response;
    })
  }
  ngOnInit() {

  }
}
