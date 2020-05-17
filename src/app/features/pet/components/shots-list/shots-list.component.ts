import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { PetShot } from '../../interfaces/pet-shot.interface';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-shots-list',
  templateUrl: './shots-list.component.html',
  styleUrls: ['./shots-list.component.scss']
})
export class ShotsListComponent implements OnInit {

  @Input() petShots: PetShot[];

  displayedColumns: string[] = ['shot', 'date', 'vet', 'notes'];
  shotsDataSource;

  constructor() { }

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit(): void {
    this.shotsDataSource = new MatTableDataSource(this.petShots);
    this.shotsDataSource.sort = this.sort;
  }

}
