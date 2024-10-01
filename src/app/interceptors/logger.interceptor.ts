import { HttpInterceptorFn } from '@angular/common/http';

export const loggerInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.includes('user')) {
    console.log(`${req.url} of method ${req.method} triggered at ${new Date().toLocaleString()}`)
  }
  return next(req);
};
