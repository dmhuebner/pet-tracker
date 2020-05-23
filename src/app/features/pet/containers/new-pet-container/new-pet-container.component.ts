import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-pet-container',
  templateUrl: './new-pet-container.component.html',
  styleUrls: ['./new-pet-container.component.scss']
})
export class NewPetContainerComponent implements OnInit {

  constructor(private fb: FormBuilder,
              public dialogRef: MatDialogRef<NewPetContainerComponent>) { }

  ngOnInit(): void {
  }

  addedNewPet(newPetForm: FormGroup) {
    if (newPetForm.valid) {
      this.dialogRef.close(newPetForm.value);
    }
  }

  close() {
    this.dialogRef.close();
  }

}
