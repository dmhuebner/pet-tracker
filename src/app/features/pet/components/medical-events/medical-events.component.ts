import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MedicalEvent } from '../../interfaces/medical-event.interface';

@Component({
  selector: 'app-medical-events',
  templateUrl: './medical-events.component.html',
  styleUrls: ['./medical-events.component.scss']
})
export class MedicalEventsComponent implements OnInit, OnChanges {

  @Input() medicalEvents: MedicalEvent[];

  sortedMedicalEvents: MedicalEvent[];
  eventSortOptions = [
      { label: 'Summary', value: 'summary' },
      { label: 'Type', value: 'type' },
      { label: 'Timestamp', value: 'timestamp' },
      { label: 'Notes', value: 'notes' },
      { label: 'Medical Attention Required', value: 'medicalAttentionRequired' }
  ];

  constructor() { }

  ngOnInit(): void {
    this.sortedMedicalEvents = this.medicalEvents.sort(this.compareMedEventsByTimestamp);
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  onSort(sortBy) {
    sortBy = sortBy.value;

    const compareMedEvents = (eventA, eventB) => {
      if (eventA[sortBy] > eventB[sortBy]) {
        return 1;
      }
      if (eventA[sortBy] < eventB[sortBy]) {
        return -1;
      }
      return 0;
    };

    if (sortBy === 'medicalAttentionRequired') {
      this.sortedMedicalEvents = this.medicalEvents.sort(this.compareMedEventsByMedAttentionRequired);
    } else if (sortBy === 'timestamp') {
      this.sortedMedicalEvents = this.medicalEvents.sort(this.compareMedEventsByTimestamp);
    } else {
      this.sortedMedicalEvents = this.medicalEvents.sort(compareMedEvents);
    }
  }

  private compareMedEventsByTimestamp(eventA, eventB) {
    if (eventA.timestamp < eventB.timestamp) {
      return 1;
    }
    if (eventA.timestamp > eventB.timestamp) {
      return -1;
    }
    return 0;
  };

  private compareMedEventsByMedAttentionRequired(eventA, eventB) {
    return (eventA === eventB) ? 0 : eventA ? -1 : 1;
  };

}
