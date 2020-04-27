import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Account } from '../interfaces/account.interface';

@Injectable({
  providedIn: 'root'
})
export class AccountDataService {

  private accountCollectionRef;

  constructor(private afs: AngularFirestore) { }

  getAccountData(userId: string): Observable<Account> {
    this.accountCollectionRef = this.afs.collection('accounts');
    const accountDoc = this.accountCollectionRef.doc(userId);
    console.log('accountDoc', accountDoc);
    return accountDoc.valueChanges();
  }

  createAccount(user: any): Observable<Account> {
    const newAccount: Account = {
      userId: user.uid,
      name: user.displayName,
      email: user.email,
      pets: [],
      selectedPet: null
    };
    return this.accountCollectionRef.doc(user.uid).set(newAccount)
  }

  updateAccount(updatedAccount: Account): Observable<Account> {
    return this.accountCollectionRef.doc(updatedAccount.userId).update(updatedAccount);
  }
}
