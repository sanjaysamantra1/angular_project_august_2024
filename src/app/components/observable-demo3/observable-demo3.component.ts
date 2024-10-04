import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { concatMap, distinctUntilChanged, exhaustMap, forkJoin, from, fromEvent, map, mergeMap, Observable, of, switchMap, take, zip } from 'rxjs';

@Component({
  selector: 'app-observable-demo3',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './observable-demo3.component.html',
  styleUrl: './observable-demo3.component.css'
})
export class ObservableDemo3Component {

  constructor(private httpClient: HttpClient) {
    this.searchForm = new FormGroup({
      searchField: new FormControl()
    });
  }

  ngOnInit() {
    // this.digitalClock();
    // this.zipDemo();
    // this.forkjoinDemo();
    // this.withoutMergeMapDemo();
    // this.mergeMapDemo();
    // this.concatMapDemo();
    // this.switchMapDemo();
    // this.exhaustMapDemo()
    // this.distinctUntilChangedDemo()
    this.distinctUntilChangedWithComparator()
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
  concatMapDemo() {
    // give me the cart details for 10 users
    let userPublisher = of(1, 2, 3, 4, 5);

    userPublisher.pipe(concatMap(userId => {
      return this.httpClient.get(`https://fakestoreapi.com/carts/${userId}`)
    })).subscribe(cartResponse => {
      console.log(cartResponse)
    });
  }


  searchResult$: Observable<any> | undefined;
  searchForm: any;
  switchMapDemo() {
    this.searchResult$ = this.searchForm.get("searchField").valueChanges.pipe(
      switchMap((term) =>
        this.httpClient.get<any>(`https://swapi.dev/api/people/?search=${term}`)
      ),
      map((response: any) =>
        response.count > 0 ? response.results : []
      ));
  }

  exhaustMapDemo() {
    const clicks = fromEvent(document, 'click');
    const result = clicks.pipe(
      exhaustMap(() => this.httpClient.get('https://fakestoreapi.com/products'))
    );
    result.subscribe((x) => console.log(x));
  }

  distinctUntilChangedDemo() {
    let userIds = of(1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3);
    userIds.pipe(distinctUntilChanged()).subscribe((res) => {
      console.log(res);
    })
  }
  distinctUntilChangedWithComparator() {
    let user1 = { name: 'sanjay' }
    let user2 = { name: 'sanjay' }
    let user3 = { name: 'akash' }
    let user4 = { name: 'deepak' }
    let user5 = { name: 'deepak' }
    let users = from([user1, user2, user3, user4, user5]);

    users.pipe(distinctUntilChanged((prev, curr) => prev.name == curr.name))
      .subscribe(val => console.log(val));
  }
}
