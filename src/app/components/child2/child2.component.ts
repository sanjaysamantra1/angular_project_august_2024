import { Component } from '@angular/core';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css',
  inputs: ['aChild2', 'child1']
})
export class Child2Component {
  aChild2: number | undefined;
  child1: any;
  cars: string[] = ['Tata', 'Honda', 'Maruti']
}
