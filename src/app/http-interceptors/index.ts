import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHeaderInterceptor } from './auth-header-interceptor';

export const httpInterceptProviders = [
    {provide: HTTP_INTERCEPTORS, useClass : AuthHeaderInterceptor, multi: true}

];

    // {provide: HTTP_INTERCEPTORS, useclass : ErrorHandlerInterceptor, multi: true}
