import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pet } from '../../interfaces/pet.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pet-profile-form',
  templateUrl: './pet-profile-form.component.html',
  styleUrls: ['./pet-profile-form.component.scss']
})
export class PetProfileFormComponent implements OnInit {

  @Input() pet: Pet;

  @Output() formSubmitted = new EventEmitter<FormGroup>();
  @Output() formCancelled = new EventEmitter<true>();

  petForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.petForm = this.initForm(this.pet);
  }

  submit() {
    this.formSubmitted.emit(this.petForm);
  }

  cancel() {
    this.formCancelled.emit(true);
  }

  private initForm(pet: Pet): FormGroup {
    return this.fb.group({
      name: [pet ? pet.name : '', [Validators.required]],
      animalType: [pet ? pet.animalType : '', [Validators.required]],
      breed: [pet ? pet.breed : '', []],
      color: [pet ? pet.color : '', []],
      description: [pet ? pet.description : '', []],
      birthday: [pet && pet.birthday ? pet.birthday.toDate() : '', []],
      sex: [pet ? pet.sex : '', []],
    });
  }

}
