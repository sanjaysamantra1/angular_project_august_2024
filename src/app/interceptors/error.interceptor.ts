import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, EMPTY } from 'rxjs';
import { ToastService } from '../services/toast.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const toastService = inject(ToastService);
  console.log('Error interceptor called')

  return next(req).pipe(catchError((error) => {
    toastService.showError(error.message);
    console.log('Error Occured')
    return EMPTY;
  }));
};
