import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { AccountService } from './features/account/services/account.service';
import { switchMap, takeUntil } from 'rxjs/operators';
import { EMPTY, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  unsubscribe$ = new Subject<true>();

  constructor(private auth: AuthService,
              private accountService: AccountService) {}

  ngOnInit() {
    this.auth.user$.pipe(
        switchMap((user) => user ? this.accountService.getAccount(user) : EMPTY),
        takeUntil(this.unsubscribe$)
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
  }
}
