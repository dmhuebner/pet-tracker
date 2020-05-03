import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Pet } from '../../../pet/interfaces/pet.interface';

@Component({
  selector: 'app-new-pet',
  templateUrl: './new-pet.component.html',
  styleUrls: ['./new-pet.component.scss']
})
export class NewPetComponent implements OnInit {

  @Input() pet: Pet;

  newPetForm: FormGroup;

  constructor(private fb: FormBuilder,
              public dialogRef: MatDialogRef<NewPetComponent>) { }

  ngOnInit(): void {
    this.newPetForm = this.fb.group({
      name: ['', [Validators.required]],
      animalType: ['', [Validators.required]],
      breed: ['', []],
      description: ['', []],
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
