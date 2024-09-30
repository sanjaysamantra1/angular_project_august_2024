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
import { Demo2Component } from '../demo2/demo2.component';
import { CommonModule } from '@angular/common';
import { Math1Component } from '../math1/math1.component';
import { Math2Component } from '../math2/math2.component';
import { HttpDemo1Component } from '../http-demo1/http-demo1.component';
import { EmployeesHttpComponent } from '../employees-http/employees-http.component';

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
    PipesDemoComponent,
    ParentComponent,
    EmployeeCrudComponent,
    Demo1Component,
    Demo2Component,
    CommonModule,
    Math1Component,
    Math2Component,
    HttpDemo1Component,
    EmployeesHttpComponent
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  flag: boolean = true;
}
