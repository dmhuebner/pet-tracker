import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss']
})
export class PetListComponent implements OnInit {

  @Input() pets: any[];

  @Output() petSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectPet(petName: string) {
    this.petSelected.emit(petName);
  }

}
