import { Component, inject } from '@angular/core';
import { MathService } from '../../services/math.service';

@Component({
  selector: 'app-math2',
  standalone: true,
  imports: [],
  templateUrl: './math2.component.html',
  styleUrl: './math2.component.css'
})
export class Math2Component {
  mathService: MathService | undefined;

  constructor() {
    this.mathService = inject(MathService); // Injection
    console.log('I am from Math-2 component')
    console.log(`Factorial Result : ${this.mathService.factorial(5)}`)
  }
}
