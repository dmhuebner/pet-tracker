import { Component, Input, OnInit } from '@angular/core';
import { Pet } from '../../interfaces/pet.interface';
import { AccountService } from '../../../account/services/account.service';
import { Account } from '../../../account/interfaces/account.interface';

@Component({
  selector: 'app-pet-profile-container',
  templateUrl: './pet-profile-container.component.html',
  styleUrls: ['./pet-profile-container.component.scss']
})
export class PetProfileContainerComponent implements OnInit {

  @Input() pet: Pet;

  editModeOn: boolean;
  account: Account;
  currentPet: Pet;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService.account$.subscribe(account => {
      this.account = account;
    });
  }

  toggleEditMode() {
    this.editModeOn = !this.editModeOn;
  }

  onPetEdited(editedPet: Pet) {
    // this.toggleEditMode();
    // const indexToUpdate = this.account.pets.findIndex(pet => pet.name === editedPet.name);
    // if (indexToUpdate) {
    //   this.account.pets[indexToUpdate] = editedPet
    // }
    // this.accountService.updateAccount(this.account);
  }

}
