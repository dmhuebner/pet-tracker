import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pet } from '../../interfaces/pet.interface';

@Component({
  selector: 'app-pet-profile',
  templateUrl: './pet-profile.component.html',
  styleUrls: ['./pet-profile.component.scss']
})
export class PetProfileComponent implements OnInit {

  @Input() pet: Pet;

  @Output() editModeOn = new EventEmitter<true>();

  constructor() { }

  ngOnInit(): void {
  }

  onEditModeClicked() {
    this.editModeOn.emit(true);
  }

}
