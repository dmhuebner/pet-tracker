import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Vet } from '../../interfaces/vet.interface';
import { PetRef } from '../../../account/interfaces/pet-ref.interface';

@Component({
  selector: 'app-vets-list',
  templateUrl: './vets-list.component.html',
  styleUrls: ['./vets-list.component.scss']
})
export class VetsListComponent implements OnInit {

  @Input() vets: Vet[];
  @Input() petList: PetRef[];
  @Input() showPetList: boolean;

  @Output() vetEdited = new EventEmitter<Vet>();
  @Output() vetDeleted = new EventEmitter<Vet>();
  @Output() petClicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onVetEdited(editedVet: Vet, index: number) {
    editedVet.index = index;
    this.vetEdited.emit(editedVet);
  }

  onPetClicked(petName: string) {
    this.petClicked.emit(petName);
  }

  onVetDeleted(vetToDelete: Vet, index: number) {
    vetToDelete.index = index;
    this.vetDeleted.emit(vetToDelete);
  }

}
