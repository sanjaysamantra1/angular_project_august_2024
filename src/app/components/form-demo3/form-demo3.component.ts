import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { createPasswordStrengthValidator } from '../../validators/password-streangth-check.validator';

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

  constructor(private formbuilder: FormBuilder) {
    this.inititlizeForm();
  }

  inititlizeForm() {
    this.registrationForm = this.formbuilder.group({
      // key : [defaultValue , syncValidator, Asyncvalidator]
      firstName: ['Sachin', [Validators.required, Validators.minLength(5)]],
      lastName: ['', [Validators.required]],
      email: [''],
      password: ['', [Validators.required,createPasswordStrengthValidator()]],
      address: {
        street: [''],
        city: [''],
        pin: ['']
      }
    })
  }

  submitMyForm(registrationForm: FormGroup) {
    console.log(registrationForm)
  }

  patchFormValue() {
    this.registrationForm.patchValue({ firstName: 'sachin' })
  }
  setFormValue() {
    this.registrationForm.setValue({ firstName: 'sachin' })
  }

}
