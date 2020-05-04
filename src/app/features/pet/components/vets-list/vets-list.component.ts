import { Component, Input, OnInit } from '@angular/core';
import { Vet } from '../../interfaces/vet.interface';

@Component({
  selector: 'app-vets-list',
  templateUrl: './vets-list.component.html',
  styleUrls: ['./vets-list.component.scss']
})
export class VetsListComponent implements OnInit {

  @Input() vets: Vet[];

  constructor() { }

  ngOnInit(): void {
  }

}
