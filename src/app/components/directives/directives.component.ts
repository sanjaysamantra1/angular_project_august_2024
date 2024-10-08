import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NumberonlyDirective } from '../../directives/numberonly.directive';
import { HighlightDirective } from '../../directives/highlight.directive';
import { BackbuttonDirective } from '../../directives/backbutton.directive';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [
    CommonModule,
    NumberonlyDirective,
    HighlightDirective,
    BackbuttonDirective
  ],
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

  myStyle1 = { color: "red", fontSize: "24px", border: "5px dotted green" }
  myStyle2 = { color: "blue", fontSize: "36px", border: "5px dashed orange" }

  myFunction() {
    return this.myStyle1;
  }
  
  myClasses = { class1: true, class2: false, class3: true }
  myFunction2() {
    return this.myClasses;
  }
}
