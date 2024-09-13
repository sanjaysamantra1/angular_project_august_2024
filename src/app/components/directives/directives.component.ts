import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  num: number = 3;
  dayNum = new Date().getDay();
  flag: boolean = false;
  cars: string[] = ['Tata', 'Honda', 'Maruti', 'Hundai']
  // cars = [];
  name = 'SACHIN';

  employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
  ];

  addNewCar() {
    this.cars = ['Tata', 'Honda', 'Maruti', 'Hundai', 'Mahindra']
  }
  addNewEmployee() {
    this.employees = [
      { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
      { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
      { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
      { eId: 102, name: 'sita', sal: 9500, gender: 'female' },
    ]
  }
  trackByFn(index: number, item: any): number {
    return item.eId;
  }
}
