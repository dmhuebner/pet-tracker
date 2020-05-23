import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, throwError } from 'rxjs';
import { VetsList } from '../interfaces/vets-list.interface';
import { catchError, map, tap } from 'rxjs/operators';
import { Vet } from '../interfaces/vet.interface';

@Injectable({
  providedIn: 'root'
})
export class VetsDataService {

  private vetsCollectionRef;

  constructor(private afs: AngularFirestore) { }

  getVetsData(userId: string): Observable<Vet[]> {
    this.vetsCollectionRef = this.afs.collection('vetLists');
    const vetList = this.vetsCollectionRef.doc(userId);
    return vetList.valueChanges().pipe(
        map((list: VetsList) => list?.vets),
        tap(list => {
          console.log('vetList', list);
        }),
        catchError(err => throwError(err))
    );
  }

  updateVetList(userId: string, vetList: Vet[]): Observable<Vet[]> {
    return this.vetsCollectionRef.doc(userId).update({vets: vetList});
  }

  createVetList(userId: string): Observable<Vet[]> {
    return this.vetsCollectionRef.doc(userId).set({vets: []});
  }
}
