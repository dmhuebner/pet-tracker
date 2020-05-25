import { Injectable } from '@angular/core';
import { formatDistanceToNow, add, sub } from 'date-fns';


@Injectable({
  providedIn: 'root'
})
export class DateFuncsService {

  constructor() { }

  formatDistanceToNow(birthday: Date) {
    return formatDistanceToNow(birthday);
  }

  addTimeToDate(targetDate: Date, hours: number, minutes: number): Date {
    return add(targetDate, { hours, minutes });
  }

  subtractTimeFromDate(targetDate: Date, weeks: number, months: number = 0, years: number = 0): Date {
    return sub(targetDate, { weeks, months, years });
  }
}
