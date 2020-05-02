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
    const newPet: Pet = {
      name: pet.name,
      animalType: pet.animalType,
      breed: pet.breed,
      description: pet.description,
      userId
    };
    return this.petsCollectionRef.add(newPet).then(petDocRef => petDocRef.id);
  }
}
