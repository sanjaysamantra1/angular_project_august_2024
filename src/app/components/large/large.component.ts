import { Component } from '@angular/core';

@Component({
  selector: 'app-large',
  standalone: true,
  imports: [],
  templateUrl: './large.component.html',
  styleUrl: './large.component.css'
})
export class LargeComponent {
  constructor() {
    this.fibonacciWithMemoization(5);
  }

  fibonacciWithMemoization(n: number) {
    let memo = [0, 1];
    for (let i = 2; i <= n; i++) {
      memo[i] = memo[i - 1] + memo[i - 2];
    }
    console.log(memo)
  }
}
