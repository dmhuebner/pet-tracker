import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Vet } from '../../interfaces/vet.interface';

@Component({
  selector: 'app-vet-info',
  templateUrl: './vet-info.component.html',
  styleUrls: ['./vet-info.component.scss']
})
export class VetInfoComponent implements OnInit {

  @Input() vet: Vet;

  @Output() editModeOn = new EventEmitter<true>();

  constructor() { }

  ngOnInit(): void {
  }

  onEditModeClicked() {
    this.editModeOn.emit(true);
  }

}
