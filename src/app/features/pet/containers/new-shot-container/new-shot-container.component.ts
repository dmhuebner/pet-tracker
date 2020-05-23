import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Vet } from '../../../vet/interfaces/vet.interface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-shot-container',
  templateUrl: './new-shot-container.component.html',
  styleUrls: ['./new-shot-container.component.scss']
})
export class NewShotContainerComponent implements OnInit {

  vets: Vet[];

  constructor(public dialogRef: MatDialogRef<NewShotContainerComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.vets = this.data.vetList;
  }

  close() {
    this.dialogRef.close();
  }

  addNewShot(newShotForm: FormGroup) {
    if (newShotForm.valid) {
      this.dialogRef.close(newShotForm);
    }
  }

}
