import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { PetShot } from '../../interfaces/pet-shot.interface';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-shots-list',
  templateUrl: './shots-list.component.html',
  styleUrls: ['./shots-list.component.scss']
})
export class ShotsListComponent implements OnInit, OnChanges {

  @Input() petShots: PetShot[];

  displayedColumns: string[] = ['shot', 'date', 'vet', 'notes'];
  shotsDataSource;

  constructor() { }

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit(): void {
    this.shotsDataSource = new MatTableDataSource(this.petShots.sort(this.compareShots));
    this.shotsDataSource.sort = this.sort;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.shotsDataSource = new MatTableDataSource(this.petShots.sort(this.compareShots));
    this.shotsDataSource.sort = this.sort;
  }

  compareShots(shotA, shotB) {
    if (shotA.date?.toDate() < shotB.date?.toDate()) {
      return 1;
    }
    if (shotA.date?.toDate() > shotB.date?.toDate()) {
      return -1;
    }
    return 0;
  }

}
