import { Component, Input, OnInit } from '@angular/core';
import { Pet } from '../../interfaces/pet.interface';
import { PetService } from '../../services/pet.service';

@Component({
  selector: 'app-pet-profile-container',
  templateUrl: './pet-profile-container.component.html',
  styleUrls: ['./pet-profile-container.component.scss']
})
export class PetProfileContainerComponent implements OnInit {

  @Input() pet: Pet;

  editModeOn: boolean;

  constructor(private petService: PetService) { }

  ngOnInit(): void {
  }

  toggleEditMode() {
    this.editModeOn = !this.editModeOn;
  }

  onPetEdited(editedPet: Pet): Promise<Pet> {
    this.toggleEditMode();
    editedPet.id = this.pet.id;
    return this.petService.updatePet(editedPet);
  }

}
