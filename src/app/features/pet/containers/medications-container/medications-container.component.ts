import { Component, Input, OnInit } from '@angular/core';
import { Pet } from '../../interfaces/pet.interface';
import { Vet } from '../../../vet/interfaces/vet.interface';

@Component({
  selector: 'app-medications-container',
  templateUrl: './medications-container.component.html',
  styleUrls: ['./medications-container.component.scss']
})
export class MedicationsContainerComponent implements OnInit {

  @Input() pet: Pet;
  @Input() vets: Vet[];

  constructor() { }

  ngOnInit(): void {
  }

}
