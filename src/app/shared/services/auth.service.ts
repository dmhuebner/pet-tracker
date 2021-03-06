import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { AccountService } from '../../features/account/services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authService: AngularFireAuth,
              private accountService: AccountService) { }

  user$ = this.authService.user;

  login(): Promise<any> {
    return this.authService.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout(): Promise<any> {
    return this.authService.signOut();
  }
}
