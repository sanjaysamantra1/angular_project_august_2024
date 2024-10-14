import { Component } from '@angular/core';
import * as data from './users.json';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser,faEye } from '@fortawesome/free-solid-svg-icons';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [FontAwesomeModule, NgxPaginationModule,RouterLink],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  users = (data as any).default;

  constructor() {
    console.log(data);
  }

  faUser = faUser;
  faEye = faEye;
  p:any;
}
