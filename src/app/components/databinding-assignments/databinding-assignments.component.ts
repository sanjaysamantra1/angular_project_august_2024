import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding-assignments',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './databinding-assignments.component.html',
  styleUrl: './databinding-assignments.component.css'
})
export class DatabindingAssignmentsComponent {
  flag: boolean = false;

  msg: string = '';
}
