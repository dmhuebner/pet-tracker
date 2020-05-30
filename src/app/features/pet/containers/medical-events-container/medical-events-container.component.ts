import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { PetService } from '../../services/pet.service';
import { Pet } from '../../interfaces/pet.interface';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../../shared/components/confirm-dialog/confirm-dialog.component';
import { takeUntil } from 'rxjs/operators';
import { MedicalEvent } from '../../interfaces/medical-event.interface';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-medical-events-container',
  templateUrl: './medical-events-container.component.html',
  styleUrls: ['./medical-events-container.component.scss']
})
export class MedicalEventsContainerComponent implements OnInit, OnDestroy {

  @Input() pet: Pet;

  unsubscribe$ = new Subject<true>();

  constructor(private petService: PetService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
  }

  openDeleteMedEventDialog(medEventToDelete: MedicalEvent) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      minWidth: '400px',
      minHeight: '150px',
      data: {
        confirmHeading: `Delete "${medEventToDelete.summary}" event?`
      }
    });

    dialogRef.afterClosed().pipe(
        takeUntil(this.unsubscribe$)
    ).subscribe(async deleteConfirmed => {
      if (deleteConfirmed) {
        await this.deleteMedicalEvent(medEventToDelete.index);
      }
    });

  }

  private deleteMedicalEvent(indexToDelete: number): Promise<Pet> {
    const updatedPet = {...this.pet};
    updatedPet.medical.medicalEvents.splice(indexToDelete, 1);
    return this.petService.updatePet(updatedPet);
  }

}
