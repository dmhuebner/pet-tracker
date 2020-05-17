import { Component, Input, OnInit } from '@angular/core';
import { Medication } from '../../interfaces/medication.interface';

@Component({
  selector: 'app-medications-list',
  templateUrl: './medications-list.component.html',
  styleUrls: ['./medications-list.component.scss']
})
export class MedicationsListComponent implements OnInit {

  @Input() medications: Medication[];

  constructor() { }

  ngOnInit(): void {
  }

}
