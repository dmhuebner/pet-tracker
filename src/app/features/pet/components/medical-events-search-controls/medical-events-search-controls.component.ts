import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MedicalEvent } from '../../interfaces/medical-event.interface';
import { DateFuncsService } from '../../../../shared/services/date-funcs.service';

const MEDICAL_EVENT_PROPS = [
  { label: 'Event Type', value: 'type' },
  { label: 'Medical Attention Required', value: 'medicalAttentionRequired' },
  { label: 'Summary', value: 'summary' },
  { label: 'Time of Event', value: 'timestamp' }
];

@Component({
  selector: 'app-medical-events-search-controls',
  templateUrl: './medical-events-search-controls.component.html',
  styleUrls: ['./medical-events-search-controls.component.scss']
})
export class MedicalEventsSearchControlsComponent implements OnInit, OnChanges {

  @Input() medicalEvents: MedicalEvent[];

  @Output() medicalEventsSorted = new EventEmitter<MedicalEvent[]>();

  sortedMedicalEvents: MedicalEvent[];
  eventSortOptions = MEDICAL_EVENT_PROPS;
  eventFilterPropOptions = [...MEDICAL_EVENT_PROPS, { label: 'Notes', value: 'notes' }];
  availableEventTypes = ['Digestive', 'Emergency', 'Ingestion', 'Injury', 'Surgery'];
  availableTimespans = [
      {label: 'Last Week', value: 'week'},
      {label: 'Last Month', value: 'month'},
      {label: 'Last Year', value: 'year'}
  ];
  eventSortBy = 'timestamp';
  eventFilterValue: string;
  eventFilterByProp: string;

  constructor(private dateService: DateFuncsService) { }

  ngOnInit(): void {
    this.sortedMedicalEvents = this.medicalEvents.sort(this.compareMedEventsByTimestamp);
    this.medicalEventsSorted.emit(this.sortedMedicalEvents);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.onSearchControlChange();
  }

  onSearchControlChange() {
    if (this.eventSortBy) {
      this.sortMedicalEvents(this.eventSortBy);
    } else {
      this.sortedMedicalEvents = this.medicalEvents;
    }

    if (this.eventFilterByProp) {
      this.filterMedicalEvents(this.eventFilterByProp, this.eventFilterValue);
    }

    this.medicalEventsSorted.emit(this.sortedMedicalEvents);
  }

  private filterMedicalEvents(filterBy: string, filterValue: string) {
    switch(filterBy) {
      case 'medicalAttentionRequired':
        this.sortedMedicalEvents = this.sortedMedicalEvents.filter(medEvent => {
          return medEvent.medicalAttentionRequired;
        });
        break;
      case 'timestamp':
        filterValue = filterValue || 'week';
        this.eventFilterValue = filterValue;
        this.filterMedEventsByTimestamp(filterValue);
        break;
      default:
        if (this.eventFilterValue) {
          this.sortedMedicalEvents = this.sortedMedicalEvents.filter(medEvent => {
            return medEvent[this.eventFilterByProp]?.toLowerCase()
                .includes(this.eventFilterValue.toLowerCase());
          });
        }
        break;
    }
  }

  private filterMedEventsByTimestamp(filterValue: string) {
    let dateToFilterWith = new Date();
    switch (filterValue) {
      case 'week':
        dateToFilterWith = this.dateService.subtractTimeFromDate(dateToFilterWith, 1);
        break;
      case 'month':
        dateToFilterWith = this.dateService.subtractTimeFromDate(dateToFilterWith, 0, 1);
        break;
      case 'year':
        dateToFilterWith = this.dateService.subtractTimeFromDate(dateToFilterWith, 0, 0, 1);
        break;
    }
    this.sortedMedicalEvents = this.sortedMedicalEvents.filter(medEvent => {
      return medEvent.timestamp.toDate() > dateToFilterWith;
    });
  }

  private sortMedicalEvents(sortBy) {
    const compareMedEvents = (eventA, eventB) => {
      if (eventA[sortBy].toLowerCase() > eventB[sortBy].toLowerCase()) {
        return 1;
      }
      if (eventA[sortBy].toLowerCase() < eventB[sortBy].toLowerCase()) {
        return -1;
      }
      return 0;
    };

    switch (sortBy) {
      case 'medicalAttentionRequired':
        this.sortedMedicalEvents = this.medicalEvents.sort(this.compareMedEventsByMedAttentionRequired);
        break;
      case 'timestamp':
        this.sortedMedicalEvents = this.medicalEvents.sort(this.compareMedEventsByTimestamp);
        break;
      default:
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
    return (eventA.medicalAttentionRequired === eventB.medicalAttentionRequired) ? 0 : eventA.medicalAttentionRequired ? -1 : 1;
  };

}
