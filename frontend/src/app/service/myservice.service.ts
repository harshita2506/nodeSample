import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }
  showTodayDate(){
    let date = new Date();
    return date;
  }
}
