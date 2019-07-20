import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ResInterceptorService implements HttpInterceptor {
  constructor(
    public toastr: ToastrService,
    private router: Router
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => {
        if(event instanceof HttpResponse && (request.url.endsWith('login') || request.url.endsWith('register')
          || request.url.includes('create') ||  request.url.includes('delete') || request.url.includes('edit'))){
          //console.log(event);
          this.toastr.success(event.body.message, 'Success');
        }
    }),
      catchError((err: HttpErrorResponse) => {
        this.toastr.error(err.error.message, 'Error');
        // this.router.navigate(['/home']);

        throw err;
      })
    )
  }
}
