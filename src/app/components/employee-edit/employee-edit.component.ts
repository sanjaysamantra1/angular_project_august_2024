import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-edit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-edit.component.html',
  styleUrl: './employee-edit.component.css',
  inputs: ['selectedEmployee']
})
export class EmployeeEditComponent {
  selectedEmployee: any;
}
