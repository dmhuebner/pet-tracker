import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MedicalEvent } from '../../interfaces/medical-event.interface';

const MEDICAL_EVENT_PROPS = [
  { label: 'Summary', value: 'summary' },
  { label: 'Event Type', value: 'type' },
  { label: 'Time of Event', value: 'timestamp' },
  { label: 'Notes', value: 'notes' },
  { label: 'Medical Attention Required', value: 'medicalAttentionRequired' }
];

@Component({
  selector: 'app-medical-events',
  templateUrl: './medical-events.component.html',
  styleUrls: ['./medical-events.component.scss']
})
export class MedicalEventsComponent implements OnInit, OnChanges {

  @Input() medicalEvents: MedicalEvent[];

  sortedMedicalEvents: MedicalEvent[];
  eventSortOptions = MEDICAL_EVENT_PROPS;
  eventFilterPropOptions = MEDICAL_EVENT_PROPS;
  eventSortBy: string;
  eventFilterValue: string;
  eventFilterByProp: string;

  constructor() { }

  ngOnInit(): void {
    this.sortedMedicalEvents = this.medicalEvents.sort(this.compareMedEventsByTimestamp);
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  onSort(sortBy = this.eventSortBy) {

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
    this.onFilter();

    this.eventSortBy = sortBy;
  }

  onFilter() {
    if (this.eventFilterValue) {
      console.log('filterByEvent', this.eventFilterValue);
      this.sortedMedicalEvents = this.sortedMedicalEvents.filter(medEvent => {
        console.log('eventFilterByProp', this.eventFilterByProp);
        return medEvent[this.eventFilterByProp]?.toLowerCase()
            .includes(this.eventFilterValue.toLowerCase());
      });
    }
  }

  onFilterPropSet(filterByProp) {
    this.eventFilterByProp = filterByProp.value;
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
