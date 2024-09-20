import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RemainingPipe } from '../../pipes/remaining.pipe';
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { MySortPipe } from '../../pipes/my-sort.pipe';

@Component({
  selector: 'app-pipes-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RemainingPipe,
    TruncatePipe,
    MySortPipe
  ],
  templateUrl: './pipes-demo.component.html',
  styleUrl: './pipes-demo.component.css'
})
export class PipesDemoComponent {
  myName: string = 'saCHin tEnDuLKaR';
  myAge: number = 20;
  mySal: number = 5000;
  today: Date = new Date();
  user = { name: 'sachin', add: 'mumbai', sal: 5000 };
  cars = ['Tata', 'Honda', 'Maruti', 'Hundai', 'Toyota', 'Mahindra'];
  userPromise: Promise<any>;
  msg: string = 'Hello';
  msg2: string = 'Hello';
  longStr: string = 'Hello Hiiiiiiiiiii, I am a Long String. Heloooooooooo HIiiiiiiii'

  constructor() {
    this.userPromise = fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());
  }

  numArr = [40, 50, 10, 30, 20];
}
