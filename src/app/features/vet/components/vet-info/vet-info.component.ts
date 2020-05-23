import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Vet } from '../../interfaces/vet.interface';
import { PetRef } from '../../../account/interfaces/pet-ref.interface';

@Component({
  selector: 'app-vet-info',
  templateUrl: './vet-info.component.html',
  styleUrls: ['./vet-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VetInfoComponent implements OnInit {

  @Input() vet: Vet;
  @Input() petList: PetRef[];
  @Input() showPetList: boolean;

  @Output() editModeOn = new EventEmitter<true>();
  @Output() clickedOnPet = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onEditModeClicked() {
    this.editModeOn.emit(true);
  }

  getPetName(petId: string): string {
    return this.petList?.find(petRef => petRef.id === petId)?.name;
  }

  onClickPet(petId) {
    this.clickedOnPet.emit(this.getPetName(petId));
  }

}
