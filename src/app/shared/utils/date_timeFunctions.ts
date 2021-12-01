import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeFormatService {

  constructor() { }

  formatDate(date: Date): string {
    return (this.concatZeroToNUm(date.getMonth()+1)) + '-' + date.getDate() + '-' + date.getFullYear() + ' ' + this.concatZeroToNUm(date.getHours()) + ':' + this.concatZeroToNUm(date.getMinutes()) + ':' + this.concatZeroToNUm(date.getSeconds());
  }

  concatZeroToNUm(num: any): string {
    return num.toString().length === 1 ? ('0' + num) : num;
  }

  get_BeforeDays_Dates(numbOfDays :number): Date {
    return new Date(new Date().getTime() - (numbOfDays * (24 * 60 * 60 * 1000)))
  }
}