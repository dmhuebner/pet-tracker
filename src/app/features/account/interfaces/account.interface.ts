import { Pet } from '../../pet/interfaces/pet.interface';

export interface Account {
    userId: string;
    name: string;
    email: string;
    pets: Pet[];
    selectedPet: string;
}
