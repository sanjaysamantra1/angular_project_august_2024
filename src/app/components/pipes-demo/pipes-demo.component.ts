import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RemainingPipe } from '../../pipes/remaining.pipe';

@Component({
  selector: 'app-pipes-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RemainingPipe,
  ],
  templateUrl: './pipes-demo.component.html',
  styleUrl: './pipes-demo.component.css'
})
export class PipesDemoComponent {
  myName: string = 'saCHin tEnDuLKaR';
  mySal: number = 5000;
  today: Date = new Date();
  user = { name: 'sachin', add: 'mumbai', sal: 5000 };
  cars = ['Tata', 'Honda', 'Maruti', 'Hundai', 'Toyota', 'Mahindra'];
  // userPromise: any;
  msg: string = 'Hello';
  msg2: string = 'Hello';

  constructor() {
    // this.userPromise = fetch('https://jsonplaceholder.typicode.com/users');
    // console.log(this.userPromise)
  }
}
