import { Component, Input, OnInit } from '@angular/core';
import { MedicalEvent } from '../../interfaces/medical-event.interface';

@Component({
  selector: 'app-medical-event',
  templateUrl: './medical-event.component.html',
  styleUrls: ['./medical-event.component.scss']
})
export class MedicalEventComponent implements OnInit {

  @Input() medicalEvent: MedicalEvent;

  constructor() { }

  ngOnInit(): void {
  }

}
