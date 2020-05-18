import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Medication } from '../../interfaces/medication.interface';

@Component({
  selector: 'app-medications-list',
  templateUrl: './medications-list.component.html',
  styleUrls: ['./medications-list.component.scss']
})
export class MedicationsListComponent implements OnInit {

  @Input() medications: Medication[];

  @Output() deleteMed = new EventEmitter<Medication>();
  @Output() completedMed = new EventEmitter<Medication>();

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteMed(medToDelete: Medication) {
    this.deleteMed.emit(medToDelete);
  }

  onCompleteMed(medToComplete: Medication) {
    this.completedMed.emit(medToComplete);
  }

}
