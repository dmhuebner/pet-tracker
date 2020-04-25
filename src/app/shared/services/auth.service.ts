import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public authService: AngularFireAuth) { }

  user$ = this.authService.user;

  login() {
    this.authService.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    this.authService.signOut();
  }
}
