import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Medication } from '../../interfaces/medication.interface';

@Component({
  selector: 'app-medications-list-item',
  templateUrl: './medications-list-item.component.html',
  styleUrls: ['./medications-list-item.component.scss']
})
export class MedicationsListItemComponent implements OnInit {

  @Input() medication: Medication;

  @Output() deleteMed = new EventEmitter<Medication>();

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteMed(medToDelete: Medication) {
    this.deleteMed.emit(medToDelete);
  }

}
