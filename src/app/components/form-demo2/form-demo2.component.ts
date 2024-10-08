import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-demo2',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './form-demo2.component.html',
  styleUrl: './form-demo2.component.css'
})
export class FormDemo2Component {
  user = {
    "firstName": "",
    "lastName": "Tendulkar",
    "email": "sachin@gmail.com",
    "address": {
      "street": "street-1",
      "city": "Mumbai",
      "pin": "123456"
    }
  }

  submitMyForm(myFormValue: any) {
    console.log(myFormValue)
  }
  resetMyForm(myForm: NgForm) {
    console.log('Do Something...');
    myForm.resetForm();
  }
}
