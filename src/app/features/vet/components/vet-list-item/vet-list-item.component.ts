import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Vet } from '../../interfaces/vet.interface';
import { FormGroup } from '@angular/forms';
import { PetRef } from '../../../account/interfaces/pet-ref.interface';

@Component({
  selector: 'app-vet-list-item',
  templateUrl: './vet-list-item.component.html',
  styleUrls: ['./vet-list-item.component.scss']
})
export class VetListItemComponent implements OnInit {

  @Input() vet: Vet;
  @Input() petList: PetRef[];
  @Input() showPetList: boolean;

  @Output() vetEdited = new EventEmitter<Vet>();
  @Output() vetDeleted = new EventEmitter<Vet>();
  @Output() petClicked = new EventEmitter<string>();

  editModeOn = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleEditMode() {
    this.editModeOn = !this.editModeOn;
  }

  onVetEdited(vetForm: FormGroup) {
    if (vetForm.valid) {
      const editedPet = {...this.vet, ...vetForm.value};
      this.vetEdited.emit(editedPet);
      this.editModeOn = false;
    }
  }

  onPetClicked(petName: string) {
    this.petClicked.emit(petName);
  }

  deleteVet(vet) {
    this.vetDeleted.emit(vet);
  }

}
