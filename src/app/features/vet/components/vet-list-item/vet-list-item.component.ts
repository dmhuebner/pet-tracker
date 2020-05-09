import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Vet } from '../../interfaces/vet.interface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-vet-list-item',
  templateUrl: './vet-list-item.component.html',
  styleUrls: ['./vet-list-item.component.scss']
})
export class VetListItemComponent implements OnInit {

  @Input() vet: Vet;

  @Output() vetEdited = new EventEmitter<Vet>();

  editModeOn = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleEditMode() {
    this.editModeOn = !this.editModeOn;
  }

  onVetEdited(vetForm: FormGroup) {
    console.log(vetForm.value);
    if (vetForm.valid) {
      const editedPet = {...this.vet, ...vetForm.value};
      this.vetEdited.emit(editedPet);
      this.editModeOn = false;
    }
  }

}
