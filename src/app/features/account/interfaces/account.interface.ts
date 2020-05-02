import { PetRef } from './pet-ref.interface';

export interface Account {
    userId: string;
    name: string;
    email: string;
    pets: PetRef[];
    selectedPet: string;
}
