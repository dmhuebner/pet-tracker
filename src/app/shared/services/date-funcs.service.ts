import { Injectable } from '@angular/core';
import { formatDistanceToNow, add } from 'date-fns';


@Injectable({
  providedIn: 'root'
})
export class DateFuncsService {

  constructor() { }

  formatDistanceToNow(birthday: Date) {
    const birthDate = new Date(birthday);
    console.log('birthDate', birthDate);
    return formatDistanceToNow(birthday);
  }

  addTimeToDate(targetDate: Date, hours: number, minutes: number) {
    return add(targetDate, {hours, minutes});
  }
}
