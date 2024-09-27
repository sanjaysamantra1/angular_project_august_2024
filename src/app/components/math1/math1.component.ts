import { Component } from '@angular/core';
import { MathService } from '../../services/math.service';

@Component({
  selector: 'app-math1',
  standalone: true,
  imports: [],
  templateUrl: './math1.component.html',
  styleUrl: './math1.component.css'
})
export class Math1Component {
  constructor(private mathService: MathService) { // Dependency Injection
    console.log('I am from Math-1 Component')
    console.log(`Addition result: ${this.mathService.add(10, 20)}`)
  }
}
