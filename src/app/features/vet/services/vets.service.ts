import { Injectable } from '@angular/core';
import { VetsDataService } from './vets-data.service';
import { VetsStateService } from './vets-state.service';
import { Observable, of } from 'rxjs';
import { Vet } from '../interfaces/vet.interface';
import { catchError, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VetsService {

  vets$: Observable<Vet[]>;

  constructor(private vetsData: VetsDataService,
              private vetsState: VetsStateService) {
      this.vets$ = this.vetsState.vets$;
  }

  getVets(userId: string): Observable<Vet[]> {
    return this.vetsData.getVetsData(userId).pipe(
        switchMap(vets => {
            if (vets) {
                this.vetsState.updateVets(vets);
                return this.vetsState.vets$;
            } else {
                return this.createVetList(userId);
            }
        }),
        catchError(err => {
            console.log('Error getting vets', err);
            return of([]);
        })
    );
  }

  updateVet(userId: string, vetToUpdate: Vet, vetList: Vet[]): Observable<Vet[]> {
      const updatedVetList = vetList.slice();
      const indexToUpdate = vetToUpdate.index;
      if (indexToUpdate > -1) {
          delete vetToUpdate.index;
          updatedVetList[indexToUpdate] = vetToUpdate;
          return this.vetsData.updateVetList(userId, updatedVetList);
      }
  }

  updateVetList(userId: string, vetList: Vet[]): Observable<Vet[]> {
      return this.vetsData.updateVetList(userId, vetList);
  }

  private createVetList(userId: string): Observable<Vet[]> {
      return this.vetsData.createVetList(userId);
  }
}
