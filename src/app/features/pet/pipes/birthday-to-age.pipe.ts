import { Pipe, PipeTransform } from '@angular/core';
import { DateFuncsService } from '../../../shared/services/date-funcs.service';
import Timestamp = firebase.firestore.Timestamp;
import * as firebase from 'firebase';

@Pipe({
  name: 'birthdayToAge'
})
export class BirthdayToAgePipe implements PipeTransform {

  constructor(private dateFuncs: DateFuncsService) {}

  transform(timestamp: Timestamp, ...args: unknown[]): unknown {
    return this.dateFuncs.formatDistanceToNow(timestamp.toDate());
  }

}
