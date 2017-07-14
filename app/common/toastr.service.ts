import { Injectable } from '@angular/core';

declare let toastr: any
export class ToastrService {

    @Injectable()
    success(message: string, title?: any) {
        toastr.success(message, title);
    }

    info(message: string, title?: any) {
        toastr.info(message, title);
    }

    warning(message: string, title?: any) {
        toastr.warning(message, title);
    }

    error(message: string, title?: any) {
        toastr.error(message, title);
    }

}