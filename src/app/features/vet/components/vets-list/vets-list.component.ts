import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Vet } from '../../interfaces/vet.interface';

@Component({
  selector: 'app-vets-list',
  templateUrl: './vets-list.component.html',
  styleUrls: ['./vets-list.component.scss']
})
export class VetsListComponent implements OnInit {

  @Input() vets: Vet[];

  @Output() vetEdited = new EventEmitter<Vet>();

  constructor() { }

  ngOnInit(): void {
  }

  onVetEdited(editedVet: Vet) {
    this.vetEdited.emit(editedVet);
  }

}
