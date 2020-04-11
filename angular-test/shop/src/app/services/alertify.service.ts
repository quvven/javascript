import { Injectable } from '@angular/core';

declare let alertify:any;

@Injectable(
  //{providedIn: 'root'} << app.module provider olarak ilave edildi anlamı aynı.
)
export class AlertifyService {
  
  constructor() { 
    
  }

  success(message:string) {
    alertify.success(message)
  }

  warning(message:string) {
    alertify.warning(message)
  }

  error(message:string) {
    alertify.error(message)
  }
}
