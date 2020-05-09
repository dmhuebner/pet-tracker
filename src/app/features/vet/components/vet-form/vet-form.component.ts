import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Vet } from '../../interfaces/vet.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vet-form',
  templateUrl: './vet-form.component.html',
  styleUrls: ['./vet-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VetFormComponent implements OnInit, OnChanges {

  @Input() vet: Vet;

  @Output() submitted = new EventEmitter<FormGroup>();
  @Output() cancelled = new EventEmitter<true>();

  vetForm: FormGroup;

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
      phone: [vet ? vet.phone : '', [Validators.required]],
      emergencyPhone: [vet ? vet.emergencyPhone : '', []],
      address: [vet ? vet.address : '', []],
      primary: [vet ? vet.primary : false, []],
      vetType: [vet ? vet.vetType : '', []],
      website: [vet ? vet.website : '', []],
      drName: [vet ? vet.drName : '', []],
      firstVisit: [vet ? vet.firstVisit : '', []]
    });
  }

}
