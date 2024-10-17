import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { UserService } from '../services/user.service';

export const userdetailsResolver: ResolveFn<Object> = (route, state) => {
  const id = +route.params['id'];
  return inject(UserService).getUserById(id);
};
