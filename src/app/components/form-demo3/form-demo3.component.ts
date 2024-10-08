import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-demo3',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './form-demo3.component.html',
  styleUrl: './form-demo3.component.css'
})
export class FormDemo3Component {
  registrationForm!: FormGroup;

  constructor() {
    this.inititlizeForm();
  }

  inititlizeForm() {
    this.registrationForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      address: new FormGroup({
        street: new FormControl(),
        city: new FormControl(),
        pin: new FormControl()
      })
    });
  }

}
