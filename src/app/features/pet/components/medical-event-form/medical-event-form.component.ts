import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateFuncsService } from '../../../../shared/services/date-funcs.service';

@Component({
  selector: 'app-medical-event-form',
  templateUrl: './medical-event-form.component.html',
  styleUrls: ['./medical-event-form.component.scss']
})
export class MedicalEventFormComponent implements OnInit {

  @Output() submitted = new EventEmitter<FormGroup>();
  @Output() cancelled = new EventEmitter<true>();

  medicalEventForm: FormGroup;
  medEventTypes = ['Digestive', 'Emergency', 'Ingestion', 'Injury', 'Surgery'];

  constructor(private fb: FormBuilder,
              private dateService: DateFuncsService) { }

  newEventTime: string;

  ngOnInit(): void {
    this.medicalEventForm = this.initMedicalEventForm();
  }

  initMedicalEventForm(): FormGroup {
    return this.fb.group({
      type: ['', []],
      summary: ['', [Validators.required]],
      timestamp: ['', [Validators.required]],
      notes: ['', []],
      medicalAttentionRequired: [false, []],
    });
  }

  submit() {
    this.submitted.emit(this.medicalEventForm);
  }

  cancel() {
    this.cancelled.emit(true);
  }

  addTimeToTimestamp(changeEvent) {
    this.newEventTime = changeEvent.target.value;
    const timestampControl = this.medicalEventForm.get('timestamp');
    if (timestampControl.value) {
      timestampControl.setValue(this.createTimestamp(timestampControl.value, this.newEventTime));
    }
  }

  addDateToTimestamp() {
    if (this.newEventTime) {
      const timestampControl = this.medicalEventForm.get('timestamp');
      timestampControl.setValue(this.createTimestamp(timestampControl.value, this.newEventTime));
    }
  }

  createTimestamp(date: Date, timeString: string): Date {
    const timeArray = timeString.split(':');
    const rawDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    return this.dateService.addTimeToDate(rawDate, Number(timeArray[0]), Number(timeArray[1]));
  }

}
