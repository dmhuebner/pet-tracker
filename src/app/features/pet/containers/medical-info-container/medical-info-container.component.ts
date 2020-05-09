import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-medical-info-container',
  templateUrl: './medical-info-container.component.html',
  styleUrls: ['./medical-info-container.component.scss']
})
export class MedicalInfoContainerComponent implements OnInit {

  @Input() userId: string;
  @Input() petId: string;

  constructor() { }

  ngOnInit(): void {
  }

}
