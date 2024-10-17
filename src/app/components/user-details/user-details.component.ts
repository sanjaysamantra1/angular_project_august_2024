import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  user: any;
  constructor(private activatedRoute: ActivatedRoute, private httpClient: HttpClient) {

  }
  ngOnInit() {
    /*  this.activatedRoute.params.subscribe((params) => {
       const userId = +params['id'];
 
       this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${userId}`).subscribe((response: any) => {
         this.user = response;
       });
     }) */
    this.activatedRoute.data.subscribe((response: any) => {
      this.user = response.userInfo;
    });
  }
}
