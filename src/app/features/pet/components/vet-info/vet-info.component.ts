import { Component, Input, OnInit } from '@angular/core';
import { Vet } from '../../interfaces/vet.interface';

@Component({
  selector: 'app-vet-info',
  templateUrl: './vet-info.component.html',
  styleUrls: ['./vet-info.component.scss']
})
export class VetInfoComponent implements OnInit {

  @Input() vet: Vet;

  constructor() { }

  ngOnInit(): void {
  }

}
