import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserProfileService } from '../services/user-profile.service';

export const adminGuard: CanActivateFn = (route, state) => {
  /* const userProfileService = inject(UserProfileService);
  if (userProfileService.getUserRole() === 'admin') {
    return true;
  } else {
    alert('Sorry!! you dont have access to this route')
    return false;
  } */
 return true;
};
