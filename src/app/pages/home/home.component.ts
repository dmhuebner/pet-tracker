import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { AccountService } from '../../features/account/services/account.service';
import { switchMap } from 'rxjs/operators';
import { EMPTY, Subject } from 'rxjs';
import { PetService } from '../../features/pet/services/pet.service';
import { ActivatedRoute } from '@angular/router';
import { Pet } from '../../features/pet/interfaces/pet.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  currentPet: Pet;
  unsubscribe$ = new Subject();

  constructor(private authService: AuthService,
              private accountService: AccountService,
              private petService: PetService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.accountService.account$.pipe(
        switchMap((account) => {
            if (account) {
                const petName = this.route.snapshot.paramMap.get('pet');
                const petRef = account.pets.find(pet => pet.name.toLowerCase() === petName.toLowerCase());
                return this.petService.getPet(petRef.id);
            } else {
                return EMPTY;
            }
        })
    ).subscribe(pet => {
      this.currentPet = pet;
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
  }

}
