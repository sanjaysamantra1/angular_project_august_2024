import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {
  constructor() { }

  add(a: number, b: number) {
    return a + b;
  }
  sub(a: number, b: number) {
    return a - b;
  }
  mul(a: number, b: number) {
    return a - b;
  }
  factorial(n: number) {
    let ans = 1;
    if (n == 0) {
      return 1;
    }
    for (let i = 2; i <= n; i++) {
      ans = ans * i;
    }
    return ans;
  }
}
