import { Component } from '@angular/core';
import { DatabindingComponent } from '../databinding/databinding.component';
import { DatabindingAssignmentsComponent } from '../databinding-assignments/databinding-assignments.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [
    DatabindingComponent,
    DatabindingAssignmentsComponent
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
      
}
