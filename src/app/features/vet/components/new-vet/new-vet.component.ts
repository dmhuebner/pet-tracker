import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Vet } from '../../interfaces/vet.interface';
import { FormGroup } from '@angular/forms';
import { PetRef } from '../../../account/interfaces/pet-ref.interface';

@Component({
  selector: 'app-new-vet',
  templateUrl: './new-vet.component.html',
  styleUrls: ['./new-vet.component.scss']
})
export class NewVetComponent implements OnInit {

  allVets: Vet[];
  petList: PetRef[];

  constructor(public dialogRef: MatDialogRef<NewVetComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    console.log('data', this.data);
    this.allVets = this.data.allVets;
    this.petList = this.data.petList;
  }

  saveNewVet(newVet: FormGroup) {
    const updatedVetList = [...this.allVets, newVet.value];
    this.dialogRef.close(updatedVetList);
  }

  close() {
    this.dialogRef.close();
  }

}
