import { Component, Input, OnInit } from '@angular/core';
import { PetRef } from '../../../account/interfaces/pet-ref.interface';
import { Router } from '@angular/router';
import { Pet } from '../../interfaces/pet.interface';
import { takeUntil } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { PetShot } from '../../interfaces/pet-shot.interface';
import { NewShotContainerComponent } from '../new-shot-container/new-shot-container.component';
import { VetsService } from '../../../vet/services/vets.service';
import { Vet } from '../../../vet/interfaces/vet.interface';
import { PetService } from '../../services/pet.service';
import { NewMedicationContainerComponent } from '../new-medication-container/new-medication-container.component';
import { Medication } from '../../interfaces/medication.interface';
import { NewMedicalEventComponent } from '../new-medical-event/new-medical-event.component';
import { MedicalEvent } from '../../interfaces/medical-event.interface';
import Timestamp = firebase.firestore.Timestamp;
import * as firebase from 'firebase';

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
  medsInfoOpen = false;
  medEventsOpen = false;
  vets: Vet[];
  unsubscribe$ = new Subject<true>();

  constructor(private router: Router,
              private dialog: MatDialog,
              private vetsService: VetsService,
              private petService: PetService) { }

  ngOnInit(): void {
    this.vetsService.vets$.subscribe(vets => {
      this.vets = this.pet?.id ? vets.filter(vet => vet.petIds.includes(this.pet.id)) : vets;
    });
  }

  gotToAccount() {
    this.router.navigate(['account'])
  }

  openAddShotDialog(): void {
    const dialogRef = this.dialog.open(NewShotContainerComponent, {
      minWidth: '400px',
      data: {
        vetList: this.vets
      }
    });

    dialogRef.afterClosed().pipe(
        takeUntil(this.unsubscribe$)
    ).subscribe(newShotForm => {
      if (newShotForm?.valid) {
        this.addPetShot(newShotForm.value);
      }
    });
  }

  openAddMedicationDialog(): void {
    const dialogRef = this.dialog.open(NewMedicationContainerComponent, {
      minWidth: '400px',
      data: {
        vetList: this.vets
      }
    });

    dialogRef.afterClosed().pipe(
        takeUntil(this.unsubscribe$)
    ).subscribe(newMed => {
      if (newMed) {
        this.addPetMed(newMed);
      }
    });
  }

  openAddMedicalEventDialog(): void {
    const dialogRef = this.dialog.open(NewMedicalEventComponent, {
      minWidth: '400px'
    });

    dialogRef.afterClosed().pipe(
        takeUntil(this.unsubscribe$)
    ).subscribe(newEvent => {
      if (newEvent) {
        this.addMedicalEvent(newEvent);
      }
    });
  }

  private addPetShot(shot: PetShot) {
    this.pet.medical.shots.push(shot);
    this.petService.updatePet(this.pet)
  }

  private addMedicalEvent(medicalEvent: MedicalEvent) {
    const timestampDat: any = medicalEvent.timestamp;
    medicalEvent.timestamp = new Timestamp(timestampDat?.getTime() / 1000, 0);
    this.pet.medical.medicalEvents.push(medicalEvent);
    this.petService.updatePet(this.pet)
  }

  private addPetMed(newMed: Medication) {
    this.pet.medical.medications.push(newMed);
    this.petService.updatePet(this.pet);
  }

}
