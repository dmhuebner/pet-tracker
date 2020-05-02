import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AccountService } from '../../../features/account/services/account.service';
import { Account } from '../../../features/account/interfaces/account.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver,
              public auth: AuthService,
              private router: Router,
              public accountService: AccountService) {

  }

  ngOnInit(): void {
  }

  login(): Promise<any> {
    return this.auth.login().then(() => {
      this.router.navigate(['/account'])
    });
  }

  logout(): Promise<any> {
    return this.auth.logout().then(() => {
      this.router.navigate(['/login'])
    });
  }

}
