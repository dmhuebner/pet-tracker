import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Vet } from '../../../vet/interfaces/vet.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-medication-form',
  templateUrl: './medication-form.component.html',
  styleUrls: ['./medication-form.component.scss']
})
export class MedicationFormComponent implements OnInit {

  @Input() vets: Vet[];

  @Output() submitted = new EventEmitter<FormGroup>();
  @Output() cancelled = new EventEmitter<true>();

  medForm: FormGroup;
  availableIntervals = ['Day', 'Week', 'Month', 'Year'];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.medForm = this.initMedForm();
  }

  initMedForm() {
    return this.fb.group({
      name: ['', [Validators.required]],
      description: ['', []],
      instructions: ['', []],
      freqInterval: ['Day', []],
      freqAmount: ['', []],
      vet: ['', []],
      startDate: [null, []],
      endDate: [null, []],
      permanent: [false, []]
    });
  }

  submit() {
    this.submitted.emit(this.medForm);
  }

  cancel() {
    this.cancelled.emit(true);
  }

}
