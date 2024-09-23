import { Component } from '@angular/core';
import { DatabindingComponent } from '../databinding/databinding.component';
import { DatabindingAssignmentsComponent } from '../databinding-assignments/databinding-assignments.component';
import { DirectivesComponent } from '../directives/directives.component';
import { UserListComponent } from '../user-list/user-list.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { MyModalComponent } from '../my-modal/my-modal.component';
import { Demo1Component } from '../demo1/demo1.component';
import { PipesDemoComponent } from '../pipes-demo/pipes-demo.component';
import { ParentComponent } from '../parent/parent.component';
import { EmployeeCrudComponent } from '../employee-crud/employee-crud.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [
    DatabindingComponent,
    DatabindingAssignmentsComponent,
    DirectivesComponent,
    UserListComponent,
    ProductListComponent,
    MyModalComponent,
    Demo1Component,
    PipesDemoComponent,
    ParentComponent,
    EmployeeCrudComponent
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
