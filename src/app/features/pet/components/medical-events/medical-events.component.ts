import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MedicalEvent } from '../../interfaces/medical-event.interface';

@Component({
  selector: 'app-medical-events',
  templateUrl: './medical-events.component.html',
  styleUrls: ['./medical-events.component.scss']
})
export class MedicalEventsComponent implements OnInit {

  @Input() medicalEvents: MedicalEvent[];

  @Output() eventDeleted = new EventEmitter<MedicalEvent>();

  sortedMedicalEvents: MedicalEvent[];

  ngOnInit(): void {
    this.sortedMedicalEvents = this.medicalEvents;
  }

  updateMedicalEventsList(updatedMedicalEvents: MedicalEvent[]) {
    this.sortedMedicalEvents = updatedMedicalEvents;
  }

  onDelete(medEventToDelete: MedicalEvent, indexToDelete: number) {
    medEventToDelete.index = indexToDelete;
    this.eventDeleted.emit(medEventToDelete);
  }

}
