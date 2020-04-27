import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-pet',
  templateUrl: './new-pet.component.html',
  styleUrls: ['./new-pet.component.scss']
})
export class NewPetComponent implements OnInit {

  newPetForm: FormGroup;

  constructor(private fb: FormBuilder,
              public dialogRef: MatDialogRef<NewPetComponent>) { }

  ngOnInit(): void {
    this.newPetForm = this.fb.group({
      name: ['', [Validators.required]],
      animalType: ['', [Validators.required]],
      breed: ['', []],
    });
  }

  addedNewPet() {
    if (this.newPetForm.valid) {
      this.dialogRef.close(this.newPetForm.value);
    }
  }

  close() {
    this.dialogRef.close();
  }

}
