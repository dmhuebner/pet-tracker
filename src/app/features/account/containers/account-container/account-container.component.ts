import { Component, OnDestroy, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { EMPTY, Subject } from 'rxjs';
import { AuthService } from '../../../../shared/services/auth.service';
import { switchMap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-account-container',
  templateUrl: './account-container.component.html',
  styleUrls: ['./account-container.component.scss']
})
export class AccountContainerComponent implements OnInit, OnDestroy {

  account: any;
  unsubscribe$ = new Subject();

  constructor(public accountService: AccountService,
              private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.user$.pipe(
        switchMap(user => {
          return user ? this.accountService.getAccount(user) : EMPTY;
        }),
        takeUntil(this.unsubscribe$)
    ).subscribe(account => {
      this.account = account
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next(true);
  }

}
