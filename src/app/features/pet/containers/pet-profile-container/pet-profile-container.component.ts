import { Component, Input, OnInit } from '@angular/core';
import { Pet } from '../../interfaces/pet.interface';

@Component({
  selector: 'app-pet-profile-container',
  templateUrl: './pet-profile-container.component.html',
  styleUrls: ['./pet-profile-container.component.scss']
})
export class PetProfileContainerComponent implements OnInit {

  @Input() pet: Pet;

  constructor() { }

  ngOnInit(): void {
  }

}
