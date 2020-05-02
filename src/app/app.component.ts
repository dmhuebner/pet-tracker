import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { AccountService } from './features/account/services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private auth: AuthService,
              private accountService: AccountService) {}

  ngOnInit() {
    this.auth.user$.subscribe(user => {
      if (user) {
        this.accountService.getAccount(user);
      }
    });
  }
}
