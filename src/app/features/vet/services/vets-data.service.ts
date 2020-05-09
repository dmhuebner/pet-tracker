import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { VetsList } from '../interfaces/vets-list.interface';
import { catchError, map } from 'rxjs/operators';
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
        map((list: VetsList) => list.vets),
        catchError(err => err)
    );
  }

  updateVetList(userId: string, vetList: Vet[]): Observable<Vet[]> {
    return this.vetsCollectionRef.doc(userId).update({vets: vetList});
  }
}
