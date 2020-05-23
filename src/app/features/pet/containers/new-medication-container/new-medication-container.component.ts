import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Vet } from '../../../vet/interfaces/vet.interface';
import { FormGroup } from '@angular/forms';
import Timestamp = firebase.firestore.Timestamp;
import * as firebase from 'firebase';

@Component({
  selector: 'app-new-medication-container',
  templateUrl: './new-medication-container.component.html',
  styleUrls: ['./new-medication-container.component.scss']
})
export class NewMedicationContainerComponent implements OnInit {

  vets: Vet[];

  constructor(public dialogRef: MatDialogRef<NewMedicationContainerComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit(): void {
    this.vets = this.data.vetList;
  }

  addNewMed(newMedForm: FormGroup) {
    if (newMedForm.valid) {
      const newMed = newMedForm.value;
      newMed.startDate = new Timestamp(newMed.startDate?.getTime() / 1000, 0);
      this.dialogRef.close(newMed);
    }
  }

  close() {
    this.dialogRef.close();
  }

}
