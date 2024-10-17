import { CanActivateChildFn } from '@angular/router';

export const myguard1Guard: CanActivateChildFn = (childRoute, state) => {
  return false;
};
