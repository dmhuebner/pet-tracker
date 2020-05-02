export interface Pet {
    id?: string; // TODO id prop should be required
    userId: string;
    name: string;
    animalType: string;
    breed?: string;
    description?: string;
}
