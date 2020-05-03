import { Injectable } from '@angular/core';
import { Pet } from '../interfaces/pet.interface';
import { Observable } from 'rxjs';
import { PetDataService } from './pet-data.service';
import { PetStateService } from './pet-state.service';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  currentPet$: Observable<Pet>;

  constructor(private petData: PetDataService,
              private petState: PetStateService) {
    this.currentPet$ = this.petState.pet$;
  }

  getPet(petId): Observable<Pet> {
    return this.petData.getPet(petId).pipe(
        switchMap(pet => {
          this.petState.updatePetState(pet);
          return this.petState.pet$;
        })
    );
  }

  // updatePet(updatedPet: Pet): Observable<Pet> {
  //   return this.petData.updatePet(updatedPet);
  // }

  createPet(pet: Pet, userId: string): Promise<string> {
    return this.petData.createPet(pet, userId);
  }
}
