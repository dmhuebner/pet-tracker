import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver,
              public auth: AuthService,
              private router: Router) {

  }

  login(): Promise<any> {
    return this.auth.login().then(() => {
      this.router.navigate(['/home'])
    });
  }

  logout(): Promise<any> {
    return this.auth.logout().then(() => {
      this.router.navigate(['/login'])
    });
  }

}
