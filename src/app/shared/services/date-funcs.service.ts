import { Injectable } from '@angular/core';
import { formatDistanceToNow } from 'date-fns';


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
}
