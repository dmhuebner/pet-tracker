import { Component, Input, OnInit } from '@angular/core';
import { Pet } from '../../interfaces/pet.interface';
import { PetShot } from '../../interfaces/pet-shot.interface';
import { ConfirmDialogComponent } from '../../../../shared/components/confirm-dialog/confirm-dialog.component';
import { takeUntil } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { PetService } from '../../services/pet.service';

@Component({
  selector: 'app-shots-container',
  templateUrl: './shots-container.component.html',
  styleUrls: ['./shots-container.component.scss']
})
export class ShotsContainerComponent implements OnInit {

  @Input() pet: Pet;

  unsubscribe$ = new Subject<true>();

  constructor(public dialog: MatDialog,
              private petService: PetService) {
  }

  ngOnInit(): void {
  }

  confirmShotDelete(shotToDelete: PetShot) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      minWidth: '400px',
      minHeight: '150px',
      data: {
        confirmHeading: `Delete "${shotToDelete.shot}" shot record?`
      }
    });

    dialogRef.afterClosed().pipe(
        takeUntil(this.unsubscribe$)
    ).subscribe(deleteConfirmed => {
      if (deleteConfirmed) {
        this.deleteShot(shotToDelete);
      }
    });
  }

  deleteShot(shotToDelete: PetShot): Promise<Pet> {
    const indexToDelete = this.pet.medical.shots.findIndex(shot => shot.shot === shotToDelete.shot);
    this.pet.medical.shots.splice(indexToDelete, 1);
    return this.petService.updatePet(this.pet)
  }

}
