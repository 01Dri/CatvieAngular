import { HttpErrorResponse, HttpStatusCode } from "@angular/common/http";
import { ErrorHandler, Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class ErrorHandlerService implements ErrorHandler {



    constructor(private router: Router) {}

    handleError(error: any): void {
        if (error instanceof HttpErrorResponse) {
            console.log(error.status)
            if (error.status === HttpStatusCode.Unauthorized || error.status === HttpStatusCode.Forbidden) {
                this.router.navigate(['/login'])
            } else {
                this.router.navigate(['/login'])
            }
        } else {
            console.log(error)
        }
    }
}