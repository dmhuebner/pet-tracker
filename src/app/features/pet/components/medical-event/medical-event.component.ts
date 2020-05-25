import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MedicalEvent } from '../../interfaces/medical-event.interface';

@Component({
  selector: 'app-medical-event',
  templateUrl: './medical-event.component.html',
  styleUrls: ['./medical-event.component.scss']
})
export class MedicalEventComponent implements OnInit {

  @Input() medicalEvent: MedicalEvent;
  @Output() deleted = new EventEmitter<true>();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete() {
    this.deleted.emit(true);
  }

}
