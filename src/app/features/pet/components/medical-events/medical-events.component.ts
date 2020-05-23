import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MedicalEvent } from '../../interfaces/medical-event.interface';

@Component({
  selector: 'app-medical-events',
  templateUrl: './medical-events.component.html',
  styleUrls: ['./medical-events.component.scss']
})
export class MedicalEventsComponent implements OnInit, OnChanges {

  @Input() medicalEvents: MedicalEvent[];

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {

  }

}
