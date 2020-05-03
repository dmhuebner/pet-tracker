import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from '../interfaces/pet.interface';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PetDataService {

  petsCollectionRef: AngularFirestoreCollection<Pet>;

  constructor(private afs: AngularFirestore) {
    this.petsCollectionRef = this.afs.collection('pets');
  }

  getPet(petId: string): Observable<Pet> {
    const petDoc = this.petsCollectionRef.doc<Pet>(petId);
    console.log('petDoc', petDoc);
    return petDoc.valueChanges();
  }

  createPet(pet: Pet, userId: string): Promise<string> {
    const newPet = {...pet, userId, id: null};
    return this.petsCollectionRef.add(newPet).then(petDocRef => {
      newPet.id = petDocRef.id;
      return this.updatePet(newPet);
    }).then(updatedPet => updatedPet.id);
  }

  updatePet(updatedPet: Pet): Promise<Pet> {
    console.log('updatedPet', updatedPet);
    return this.petsCollectionRef.doc(updatedPet.id).update(updatedPet).then(() => updatedPet);
  }
}
