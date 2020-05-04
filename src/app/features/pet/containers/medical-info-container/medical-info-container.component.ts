import { Component, Input, OnInit } from '@angular/core';
import { MedicalInfo } from '../../interfaces/medical-info.interface';

@Component({
  selector: 'app-medical-info-container',
  templateUrl: './medical-info-container.component.html',
  styleUrls: ['./medical-info-container.component.scss']
})
export class MedicalInfoContainerComponent implements OnInit {

  @Input() medicalInfo: MedicalInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
