import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-observable-demo1',
  standalone: true,
  imports: [],
  templateUrl: './observable-demo1.component.html',
  styleUrl: './observable-demo1.component.css'
})
export class ObservableDemo1Component {
  constructor(private httpClient: HttpClient) {

  }
  ngOnInit() {
    // this.promiseDemo()
    this.observableDemo1()
    this.observableDemo2()
  }
  promiseDemo() {
    const usersPromise = fetch('https://jsonplaceholder.typicode.com/users');
    usersPromise.then(
      (response) => {
        const jsonPromise = response.json()
        jsonPromise.then(
          (finalResponse) => {
            console.log(finalResponse)
          },
          (err) => {
            console.log(err)
          }
        )
      },
      (err) => {
        console.log(err);
      }
    )
  }

  observableDemo1() {
    let postsObs = this.httpClient.get('https://jsonplaceholder.typicode.com/osts');
    postsObs.subscribe({
      next: (res) => {
        console.log(res)
      },
      error: (err) => {
        console.log('Something went wrong ', err)
      },
      complete: () => {
        console.log('all data received')
      }
    });
  }

  observableDemo2() {
    this.httpClient.get('https://jsonplaceholder.typicode.com/omments').subscribe((res) => {
      console.log(res);
    });
  }
}
