import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor() { }

  newService(uname: string, pwd: string) {
    if (uname === 'admin' && pwd === 'admin123') {
      localStorage.setItem('username', 'admin');
      return true;
    } else {
      return false;
    }
  }
}
