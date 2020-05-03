import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pet } from '../interfaces/pet.interface';

@Injectable({
  providedIn: 'root'
})
export class PetStateService {

  private petSubject = new BehaviorSubject<Pet>(null);
  pet$ = this.petSubject.asObservable();

  constructor() { }

  updatePetState(pet: Pet): void {
    this.petSubject.next(pet);
  }
}
