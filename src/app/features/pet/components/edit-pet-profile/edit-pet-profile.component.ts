import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pet } from '../../interfaces/pet.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-pet-profile',
  templateUrl: './edit-pet-profile.component.html',
  styleUrls: ['./edit-pet-profile.component.scss']
})
export class EditPetProfileComponent implements OnInit {

  @Input() pet: Pet;

  @Output() editedPet = new EventEmitter<Pet>();
  @Output() editModeOff = new EventEmitter<true>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  savePetProfile(petProfileForm: FormGroup) {
    if (petProfileForm.valid) {
      this.editedPet.emit(petProfileForm.value);
    }
  }

  turnEditModeOff() {
    this.editModeOff.emit(true);
  }
}
