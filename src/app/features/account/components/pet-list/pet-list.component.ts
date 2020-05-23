import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PetRef } from '../../interfaces/pet-ref.interface';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss']
})
export class PetListComponent implements OnInit {

  @Input() pets: PetRef[];

  @Output() petSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectPet(petName: string) {
    this.petSelected.emit(petName);
  }

}
