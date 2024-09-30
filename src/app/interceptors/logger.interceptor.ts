import { HttpInterceptorFn } from '@angular/common/http';

export const loggerInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(`${req.url} of method ${req.method} triggered at ${new Date().toLocaleString()}`)
  return next(req);
};
