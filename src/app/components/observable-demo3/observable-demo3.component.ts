import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { forkJoin, map, mergeMap, Observable, of, take, zip } from 'rxjs';

@Component({
  selector: 'app-observable-demo3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './observable-demo3.component.html',
  styleUrl: './observable-demo3.component.css'
})
export class ObservableDemo3Component {

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    // this.digitalClock();
    // this.zipDemo();
    // this.forkjoinDemo();
    // this.withoutMergeMapDemo();
    this.mergeMapDemo();
  }

  time$: Observable<string> | undefined;
  digitalClock() {
    this.time$ = new Observable<string>(observer => {
      setInterval(() => observer.next(new Date().toLocaleTimeString()), 1000);
    });
  }

  zipDemo() {
    let publisher1 = of(32, 31, 34);
    let publisher2 = of('sanjay', 'sameer', 'bishnu');
    let publisher3 = of('bang', 'chennai', 'hyderabad');

    let finalPublisher = zip(publisher1, publisher2, publisher3).pipe(
      map(([age, name, add]) => ({ age, name, add }))
    );
    finalPublisher.subscribe((data) => console.log(data));
  }

  forkjoinDemo() {
    let userNames = ['sanjaysamantra1', 'ushamahesh818', 'seun035'];
    let requests = userNames.map(userName => {
      return this.httpClient.get(`https://api.github.com/users/${userName}`)
    })
    forkJoin(requests).subscribe((responses) => {
      console.log(responses);
    });
  }

  withoutMergeMapDemo() {
    // give me the cart details for firt 5 users
    this.httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe((users: any) => {
      let userIds = users.map((user: any) => user.id);
      console.log(userIds);
      userIds.map((userId: any) => {
        this.httpClient.get(`https://fakestoreapi.com/carts/${userId}`).subscribe(cart => {
          console.log(cart)
        })
      });
    });
  }

  mergeMapDemo() {
    // give me the cart details for 10 users
    let userPublisher = of(1, 2, 3, 4, 5);

    userPublisher.pipe(mergeMap(userId => {
      return this.httpClient.get(`https://fakestoreapi.com/carts/${userId}`)
    })).subscribe(cartResponse => {
      console.log(cartResponse)
    });

  }
}
