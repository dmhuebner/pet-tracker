import { Component, OnDestroy, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { EMPTY, Observable, Subject } from 'rxjs';
import { AuthService } from '../../../../shared/services/auth.service';
import { switchMap, takeUntil } from 'rxjs/operators';
import { Account } from '../../interfaces/account.interface';
import { GravatarService } from '../../services/gravatar.service';
import { MatDialog } from '@angular/material/dialog';
import { Pet } from '../../../pet/interfaces/pet.interface';
import { PetService } from '../../../pet/services/pet.service';
import { Router } from '@angular/router';
import { NewPetContainerComponent } from '../../../pet/containers/new-pet-container/new-pet-container.component';
import { NewVetComponent } from '../../../vet/components/new-vet/new-vet.component';
import { Vet } from '../../../vet/interfaces/vet.interface';
import { VetsService } from '../../../vet/services/vets.service';

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
              public dialog: MatDialog,
              private petService: PetService,
              private router: Router,
              private vetsService: VetsService) { }

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
    const dialogRef = this.dialog.open(NewPetContainerComponent, {
        minWidth: '400px'
    });

    dialogRef.afterClosed().pipe(
        takeUntil(this.unsubscribe$)
    ).subscribe(newPet => {
        this.addNewPet(newPet);
    });
  }

    openAddVetDialog(allVets: Vet[]): void {
        const dialogRef = this.dialog.open(NewVetComponent, {
            minWidth: '400px',
            data: { allVets }
        });

        dialogRef.afterClosed().pipe(
            takeUntil(this.unsubscribe$)
        ).subscribe(newVetList => {
            if (newVetList) {
                this.updateVetList(newVetList);
            }
        });
    }

  goToPetProfile(petName): void {
      this.router.navigate(['/profile', petName])
  }

  private addNewPet(newPet: Pet): Promise<Pet> {
      if (newPet) {
          newPet.userId = this.account.userId;
          console.log('New Pet', newPet);
          return this.petService.createPet(newPet, this.account.userId).then(petId => {
              return this.addPetRefToAccount(newPet, petId);
          });
      }
  }

  private updateVetList(newVetList: Vet[]): Observable<Vet[]> {
      return this.vetsService.updateVetList(this.account.userId, newVetList)
  }

  private addPetRefToAccount(newPet: Pet, petId: string): Pet {
      const updatedAccount = {...this.account};
      const newPetRef = {
          name: newPet.name,
          breed: newPet.breed,
          animalType: newPet.animalType,
          id: petId
      };
      updatedAccount.pets.push(newPetRef);
      this.accountService.updateAccount(updatedAccount);
      return newPet;
  }

}
