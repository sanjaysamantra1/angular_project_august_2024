import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users_api = 'https://jsonplaceholder.typicode.com/users'

  constructor(private httpClient: HttpClient) { }

  getAllUsers() {
    return this.httpClient.get(this.users_api)
  }
  getUserById(userId: number) {
    return this.httpClient.get(`${this.users_api}/${userId}`)
  }
}
