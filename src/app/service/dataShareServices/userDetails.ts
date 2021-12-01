import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class LoggedInUserData {

  constructor() { }

getLoginDetails(){
    return JSON.parse(sessionStorage.getItem("loginDetails"));
}

   
}