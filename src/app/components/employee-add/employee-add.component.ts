import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-add',
  standalone: true,
  imports: [],
  templateUrl: './employee-add.component.html',
  styleUrl: './employee-add.component.css',
  outputs:['addEmpEvent']
})
export class EmployeeAddComponent {
  addEmpEvent = new EventEmitter();

  addEmp(eId: any, name: any, sal: any, gender: any) {
    this.addEmpEvent.emit({ eId, name, sal, gender });
  }
}
