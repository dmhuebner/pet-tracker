import { Injectable } from '@angular/core';
import { VetsDataService } from './vets-data.service';
import { VetsStateService } from './vets-state.service';
import { Observable } from 'rxjs';
import { Vet } from '../interfaces/vet.interface';
import { switchMap } from 'rxjs/operators';

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
          this.vetsState.updateVets(vets);
          return this.vetsState.vets$;
        })
    );
  }

  updateVet(userId: string, vetToUpdate: Vet, vetList: Vet[]): Observable<Vet[]> {
      const indexToUpdate = vetList.findIndex(vet => vet.id === vetToUpdate.id);
      const updatedVetList = vetList.slice();
      updatedVetList[indexToUpdate] = vetToUpdate;
      console.log('updatedVetList', updatedVetList);
      return this.vetsData.updateVetList(userId, updatedVetList);
  }

    updateVetList(userId: string, vetList: Vet[]): Observable<Vet[]> {
        return this.vetsData.updateVetList(userId, vetList);
    }
}
