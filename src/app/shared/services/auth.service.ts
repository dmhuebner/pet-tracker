import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public authService: AngularFireAuth) { }

  user$ = this.authService.user;

  login(): Promise<any> {
    return this.authService.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout(): Promise<any> {
    return this.authService.signOut();
  }
}
