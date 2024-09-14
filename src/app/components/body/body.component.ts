import { Component } from '@angular/core';
import { DatabindingComponent } from '../databinding/databinding.component';
import { DatabindingAssignmentsComponent } from '../databinding-assignments/databinding-assignments.component';
import { DirectivesComponent } from '../directives/directives.component';
import { UserListComponent } from '../user-list/user-list.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [
    DatabindingComponent,
    DatabindingAssignmentsComponent,
    DirectivesComponent,
    UserListComponent
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
