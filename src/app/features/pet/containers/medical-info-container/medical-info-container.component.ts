import { Component, Input, OnInit } from '@angular/core';
import { PetRef } from '../../../account/interfaces/pet-ref.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medical-info-container',
  templateUrl: './medical-info-container.component.html',
  styleUrls: ['./medical-info-container.component.scss']
})
export class MedicalInfoContainerComponent implements OnInit {

  @Input() userId: string;
  @Input() petId: string;
  @Input() petList: PetRef[];

  vetInfoOpen = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotToAccount() {
    this.router.navigate(['account'])
  }

}
