import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountDataService } from './account-data.service';
import { AccountStateService } from './account-state.service';
import { switchMap, tap } from 'rxjs/operators';
import { Account } from '../interfaces/account.interface';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private dataService: AccountDataService,
              private stateService: AccountStateService) { }

  getAccount(user: any): Observable<any> {
    const accountData$ = this.dataService.getAccountData(user.uid);
    return accountData$.pipe(
        switchMap((accountData) => {
            if (accountData) {
                this.stateService.updateAccount(accountData);
                return this.stateService.account$;
            } else {
                return this.createAccount(user);
            }
        })
    );
  }

    updateAccount(updatedAccount: Account): Observable<Account> {
        return this.dataService.updateAccount(updatedAccount);
    }

  private createAccount(user: any): Observable<Account> {
      return this.dataService.createAccount(user);
  }
}
