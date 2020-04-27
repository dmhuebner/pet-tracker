import { Component, OnDestroy, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { EMPTY, Subject } from 'rxjs';
import { AuthService } from '../../../../shared/services/auth.service';
import { switchMap, takeUntil } from 'rxjs/operators';
import { Account } from '../../interfaces/account.interface';
import { GravatarService } from '../../services/gravatar.service';
import { MatDialog } from '@angular/material/dialog';
import { NewPetComponent } from '../../components/new-pet/new-pet.component';

@Component({
  selector: 'app-account-container',
  templateUrl: './account-container.component.html',
  styleUrls: ['./account-container.component.scss']
})
export class AccountContainerComponent implements OnInit, OnDestroy {

  account: Account;
  unsubscribe$ = new Subject();
  userImageUrl: string;

  constructor(public accountService: AccountService,
              private auth: AuthService,
              private gravatarService: GravatarService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.auth.user$.pipe(
        switchMap(user => {
          this.userImageUrl = this.gravatarService.getGravatar(user.email);
          return user ? this.accountService.getAccount(user) : EMPTY;
        }),
        takeUntil(this.unsubscribe$)
    ).subscribe(account => {
        console.log('account', account);
        this.account = account
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next(true);
  }

  openAddPetDialog(): void {
    const dialogRef = this.dialog.open(NewPetComponent, {
        minWidth: '400px'
    });

    dialogRef.afterClosed().pipe(
        takeUntil(this.unsubscribe$)
    ).subscribe(newPet => {
        console.log('New Pet', newPet);
        if (newPet) {
            const updatedAccount = {...this.account};
            updatedAccount.pets.push(newPet);
            this.accountService.updateAccount(updatedAccount);
        }
    });
  }

  selectPet(petName): void {
      const updatedAccount = {...this.account};
      updatedAccount.selectedPet = petName;
      this.accountService.updateAccount(updatedAccount);
  }

}
