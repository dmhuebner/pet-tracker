import { Injectable } from '@angular/core';
import { Pet } from '../interfaces/pet.interface';
import { Observable } from 'rxjs';
import { PetDataService } from './pet-data.service';
import { PetStateService } from './pet-state.service';
import { switchMap } from 'rxjs/operators';
import { FileStorageService } from '../../../shared/services/file-storage.service';
import { fromPromise } from 'rxjs/internal-compatibility';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  currentPet$: Observable<Pet>;

  constructor(private petData: PetDataService,
              private petState: PetStateService,
              private fileStorageService: FileStorageService) {
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

  updatePet(updatedPet: Pet): Promise<Pet> {
    return this.petData.updatePet(updatedPet);
  }

  createPet(pet: Pet, userId: string): Promise<string> {
    return this.petData.createPet(pet, userId);
  }

  uploadPetImage(pet: Pet, file: File): Observable<Pet> {
    return this.fileStorageService.uploadFile('PetImages', pet.id, file).pipe(
        switchMap(imageUrl => {
          pet.profileImages.push(imageUrl);
          return fromPromise(this.updatePet(pet))
        })
    );
  }
}
