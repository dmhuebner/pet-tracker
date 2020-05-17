import { Component, Input, OnInit } from '@angular/core';
import { PetRef } from '../../../account/interfaces/pet-ref.interface';
import { Router } from '@angular/router';
import { Pet } from '../../interfaces/pet.interface';

@Component({
  selector: 'app-medical-info-container',
  templateUrl: './medical-info-container.component.html',
  styleUrls: ['./medical-info-container.component.scss']
})
export class MedicalInfoContainerComponent implements OnInit {

  @Input() userId: string;
  @Input() pet: Pet;
  @Input() petList: PetRef[];

  vetInfoOpen = false;
  shotsInfoOpen = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotToAccount() {
    this.router.navigate(['account'])
  }

  addShot() {

  }

}
