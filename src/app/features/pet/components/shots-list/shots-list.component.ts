import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { PetShot } from '../../interfaces/pet-shot.interface';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import Timestamp = firebase.firestore.Timestamp;
import * as firebase from 'firebase';

@Component({
  selector: 'app-shots-list',
  templateUrl: './shots-list.component.html',
  styleUrls: ['./shots-list.component.scss']
})
export class ShotsListComponent implements OnInit, OnChanges {

  @Input() petShots: PetShot[];

  @Output() clickedDelete = new EventEmitter<PetShot>();

  displayedColumns: string[] = ['shot', 'date', 'vet', 'notes', 'delete'];
  shotsDataSource;

  constructor() { }

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit(): void {
    this.shotsDataSource = new MatTableDataSource(this.petShots?.sort(this.compareShots));
    this.shotsDataSource.sort = this.sort;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.shotsDataSource = new MatTableDataSource(this.petShots?.sort(this.compareShots));
    this.shotsDataSource.sort = this.sort;
  }

  deleteShot(shot: PetShot) {
    this.clickedDelete.emit(shot);
  }

  dateIsFuture(date: Timestamp) {
    return date.toDate() > new Date();
  }

  private compareShots(shotA, shotB) {
    if (shotA.date?.toDate() < shotB.date?.toDate()) {
      return 1;
    }
    if (shotA.date?.toDate() > shotB.date?.toDate()) {
      return -1;
    }
    return 0;
  }

}
