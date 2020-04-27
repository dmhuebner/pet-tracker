import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { AccountService } from '../../features/account/services/account.service';
import { Account } from '../../features/account/interfaces/account.interface';
import { Pet } from '../../features/pet/interfaces/pet.interface';
import { switchMap, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  selectedPet: Pet;
  unsubscribe$ = new Subject();

  constructor(private authService: AuthService,
              private accountService: AccountService) { }

  ngOnInit() {
    this.authService.user$.pipe(
        switchMap(user => {
          return this.accountService.getAccount(user);
        }),
        takeUntil(this.unsubscribe$)
    ).subscribe(account => {
      this.selectedPet = this.getSelectedPet(account);
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
  }

  private getSelectedPet(account: Account): Pet {
    return account.pets.find(pet => pet.name === account.selectedPet);
  }

}
