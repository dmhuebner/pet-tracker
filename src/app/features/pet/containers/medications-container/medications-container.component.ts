import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Pet } from '../../interfaces/pet.interface';
import { Vet } from '../../../vet/interfaces/vet.interface';
import { ConfirmDialogComponent } from '../../../../shared/components/confirm-dialog/confirm-dialog.component';
import { takeUntil } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { PetService } from '../../services/pet.service';
import { Medication } from '../../interfaces/medication.interface';

@Component({
  selector: 'app-medications-container',
  templateUrl: './medications-container.component.html',
  styleUrls: ['./medications-container.component.scss']
})
export class MedicationsContainerComponent implements OnInit, OnDestroy, OnChanges {

  @Input() pet: Pet;
  @Input() vets: Vet[];

  meds: Medication[];
  unsubscribe$ = new Subject<true>();

  constructor(private dialog: MatDialog,
              private petService: PetService) { }

  ngOnInit(): void {
    this.meds = this.pet?.medical?.medications?.filter(med => !med.complete);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.meds = this.pet?.medical?.medications?.filter(med => !med.complete);
  }

  confirmMedDelete(medToDelete: Medication) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      minWidth: '400px',
      minHeight: '150px',
      data: {
        confirmHeading: `Delete "${medToDelete.name}" medication record?`
      }
    });

    dialogRef.afterClosed().pipe(
        takeUntil(this.unsubscribe$)
    ).subscribe(deleteConfirmed => {
      if (deleteConfirmed) {
        this.deleteMed(medToDelete);
      }
    });
  }

  deleteMed(medToDelete: Medication): Promise<Pet> {
    const indexToDelete = this.pet.medical.medications.findIndex(med => med.name === medToDelete.name);
    this.pet.medical.medications.splice(indexToDelete, 1);
    return this.petService.updatePet(this.pet)
  }

}
