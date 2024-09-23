import { CommonModule } from '@angular/common';
import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-table',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './employee-table.component.html',
  styleUrl: './employee-table.component.css',
  inputs: ['employees','editEmployee'],
  outputs: ['deleteEmpEvent']
})
export class EmployeeTableComponent {
  employees: any;
  editEmployee:any;
  
  deleteEmpEvent = new EventEmitter();
  deleteEmp(eId: number) {
    this.deleteEmpEvent.emit(eId);
  }
}
