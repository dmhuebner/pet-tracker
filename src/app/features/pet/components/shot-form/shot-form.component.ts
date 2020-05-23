import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Vet } from '../../../vet/interfaces/vet.interface';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-shot-form',
  templateUrl: './shot-form.component.html',
  styleUrls: ['./shot-form.component.scss']
})
export class ShotFormComponent implements OnInit {

  @Input() vets: Vet[];

  @Output() submitted = new EventEmitter<FormGroup>();
  @Output() cancelled = new EventEmitter<true>();

  shotForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.shotForm = this.initShotForm();
  }

  initShotForm() {
    return this.fb.group({
      shot: ['', []],
      date: ['', []],
      vet: ['', []],
      notes: ['', []],
    });
  }

  submit() {
    this.submitted.emit(this.shotForm);
  }

  cancel() {
    this.cancelled.emit(true);
  }

}
