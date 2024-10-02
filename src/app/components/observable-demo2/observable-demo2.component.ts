import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { filter, from, interval, map, Observable, of, range, take } from 'rxjs';

@Component({
  selector: 'app-observable-demo2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './observable-demo2.component.html',
  styleUrl: './observable-demo2.component.css'
})
export class ObservableDemo2Component {
  ngOnInit() {
    // this.createOwnObservable();
    // this.fromDemo();
    // this.ofDemo();
    // this.intervalDemo();
    // this.rangeDemo();
    // this.mapDemo();
    this.takeDemo();
  }

  createOwnObservable() {
    let publisher1 = new Observable((provider) => {
      provider.next('AAAAA')
      provider.next('BBBBB')
      provider.next('CCCCC')
      provider.next('DDDDD')
      provider.complete()
    });
    let subscriber1 = publisher1.subscribe({
      next: (val) => { console.log(val) },
      error: (err) => { console.log(err) },
      complete: () => { console.log('all data received') },
    })
  }
  fromDemo() {
    let cars = ['Tata', 'Honda', 'Maruti'];
    let carsObs = from(cars);
    carsObs.subscribe((val) => console.log(val));
  }
  ofDemo() {
    let fruitsObs = of('Apple', 'Mango', 'Orange');
    fruitsObs.subscribe((fruit) => console.log(fruit));
  }
  numbers$: Observable<number> | undefined;
  intervalDemo() {
    this.numbers$ = interval(1000);
    // numbers.subscribe((val) => console.log(val));
  }

  rangeDemo() {
    let values = range(20, 10);
    values.subscribe((val) => console.log(val));
  }
  mapDemo() {
    let nums = range(1, 10);
    nums.subscribe((val) => console.log(val));

    let squares = nums.pipe(map(ele => ele * ele));
    squares.subscribe((val) => console.log(val));

    let even_nums = nums.pipe(filter(ele => ele % 2 == 0));
    even_nums.subscribe((val) => console.log(val));
  }
  takeDemo() {
    let nums = range(1, 10);
    // nums.subscribe((val) => console.log(val));
    let only5Values = nums.pipe(take(5));
    only5Values.subscribe((val) => console.log(val));
  }
}
