import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Account } from '../interfaces/account.interface';

@Injectable({
  providedIn: 'root'
})
export class AccountStateService {

  private accountSubject = new BehaviorSubject<Account>(null);
  account$ = this.accountSubject.asObservable();

  constructor() { }

  updateAccount(account: Account): void {
    this.accountSubject.next(account);
  }
}
