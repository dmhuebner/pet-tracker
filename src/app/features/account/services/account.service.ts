import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountDataService } from './account-data.service';
import { AccountStateService } from './account-state.service';
import { switchMap } from 'rxjs/operators';

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

  private createAccount(user: any): Observable<any> {
      return this.dataService.createAccount(user);
  }
}
