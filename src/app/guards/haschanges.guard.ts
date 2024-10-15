import { CanDeactivateFn } from '@angular/router';

export const haschangesGuard: CanDeactivateFn<unknown> = (component: any, currentRoute, currentState, nextState) => {
  if (component.pageHasChanges) {
    alert('Please save before you leave the page');
    return false;
  } else {
    return true;
  }
};
