import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Vet } from '../interfaces/vet.interface';

@Injectable({
  providedIn: 'root'
})
export class VetsStateService {

  private vetsSubject = new BehaviorSubject<Vet[]>(null);
  vets$ = this.vetsSubject.asObservable();

  constructor() { }

  updateVets(vets: Vet[]): void {
    this.vetsSubject.next(vets);
  }
}
