import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';


@Injectable()

export class AuthHeaderInterceptor implements HttpInterceptor{
    intercept( request: HttpRequest<any>, next:HttpHandler ){


        //logic
        console.log("Auth Interceptor Provider");
        console.log(request.url); //shows which url

        const authToken = "My Auth";
        const authReq   = request.clone({
            setHeaders: { Authorization: authToken }
        });



        return next.handle(authReq);
    }
}

