import { Component, Input, OnInit } from '@angular/core';
import { MedicalEvent } from '../../interfaces/medical-event.interface';

@Component({
  selector: 'app-medical-events',
  templateUrl: './medical-events.component.html',
  styleUrls: ['./medical-events.component.scss']
})
export class MedicalEventsComponent implements OnInit {

  @Input() medicalEvents: MedicalEvent[];

  sortedMedicalEvents: MedicalEvent[];

  ngOnInit(): void {
    this.sortedMedicalEvents = this.medicalEvents;
  }

  updateMedicalEventsList(updatedMedicalEvents: MedicalEvent[]) {
    console.log('updatedMedicalEvents', updatedMedicalEvents);
    this.sortedMedicalEvents = updatedMedicalEvents;
  }

}
