import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { response } from 'express';

@Component({
  selector: 'app-http-demo1',
  standalone: true,
  imports: [],
  templateUrl: './http-demo1.component.html',
  styleUrl: './http-demo1.component.css'
})
export class HttpDemo1Component {
  users_url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) {
  }
  ngOnInit() {
    this.fetchUsersJavascript();
    this.fetchUsersAngular();
  }
  fetchUsersAngular() {
    this.httpClient.get(this.users_url).subscribe(response => {
      console.log(response);
    })

  }

  fetchUsersJavascript() {
    fetch(this.users_url).then(response => {
      response.json().then(finalResponse => {
        console.log(finalResponse)
      })
    }).catch(err => {
      console.log('error')
    })
  }
} 
