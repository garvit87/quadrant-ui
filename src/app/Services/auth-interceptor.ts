import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Clone the request and set the desired header
    const authReq = req.clone({
      setHeaders: {
        Authorization: 'Bearer YourAccessTokenHere', // Replace with your actual authorization token
      },
    });

    // Pass the cloned request to the next interceptor or to the HttpClient if no more interceptors exist
    return next.handle(authReq);
  }
}
