import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Vet } from '../../interfaces/vet.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PetRef } from '../../../account/interfaces/pet-ref.interface';

@Component({
  selector: 'app-vet-form',
  templateUrl: './vet-form.component.html',
  styleUrls: ['./vet-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VetFormComponent implements OnInit, OnChanges {

  @Input() vet: Vet;
  @Input() petList: PetRef[];

  @Output() submitted = new EventEmitter<FormGroup>();
  @Output() cancelled = new EventEmitter<true>();

  vetForm: FormGroup;
  availableVetTypes = ['Clinic', 'Emergency', 'Clinic/Emergency'];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.vetForm = this.initVetForm(this.vet);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.vetForm = this.initVetForm(this.vet);
  }

  onSubmit() {
    this.submitted.emit(this.vetForm);
  }

  onCancel() {
    this.cancelled.emit(true);
  }

  private initVetForm(vet: Vet): FormGroup {
    return this.fb.group({
      name: [vet ? vet.name : '', [Validators.required]],
      phone: [vet ? vet.phone : '', []],
      emergencyPhone: [vet ? vet.emergencyPhone : '', []],
      address: [vet ? vet.address : '', []],
      primary: [vet ? vet.primary : false, []],
      vetType: [vet ? vet.vetType : '', []],
      website: [vet ? vet.website : '', []],
      drName: [vet ? vet.drName : '', []],
      petIds: [vet ? vet.petIds : [], []],
      firstVisit: [vet ? vet.firstVisit : '', []]
    });
  }

}
