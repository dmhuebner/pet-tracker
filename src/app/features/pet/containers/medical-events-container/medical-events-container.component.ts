import { Component, Input, OnInit } from '@angular/core';
import { MedicalEvent } from '../../interfaces/medical-event.interface';

@Component({
  selector: 'app-medical-events-container',
  templateUrl: './medical-events-container.component.html',
  styleUrls: ['./medical-events-container.component.scss']
})
export class MedicalEventsContainerComponent implements OnInit {

  @Input() medicalEvents: MedicalEvent[];

  constructor() { }

  ngOnInit(): void {
  }

}
