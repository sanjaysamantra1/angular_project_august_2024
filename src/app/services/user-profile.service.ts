import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  constructor() { }

  userRole: string = 'normal';

  getUserRole() {
    return this.userRole;
  }
}
