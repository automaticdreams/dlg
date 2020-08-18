import {Injectable, Injector} from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService {

  constructor(injector: Injector, private router: Router) {
  }

  handleError(error) {

    console.error('An error occurred:', error.message); // this would normally be logged and reported

    this.router.navigate(['/error']);

  }

}
