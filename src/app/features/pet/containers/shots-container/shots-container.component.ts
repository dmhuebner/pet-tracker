import { Component, Input, OnInit } from '@angular/core';
import { Pet } from '../../interfaces/pet.interface';

@Component({
  selector: 'app-shots-container',
  templateUrl: './shots-container.component.html',
  styleUrls: ['./shots-container.component.scss']
})
export class ShotsContainerComponent implements OnInit {

  @Input() pet: Pet;

  constructor() { }

  ngOnInit(): void {
  }

}
