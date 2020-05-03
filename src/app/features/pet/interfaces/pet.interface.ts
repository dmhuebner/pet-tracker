import Timestamp = firebase.firestore.Timestamp;
import * as firebase from 'firebase';

export interface Pet {
    id: string; // TODO id prop should be required
    userId: string;
    name: string;
    animalType: string;
    breed?: string;
    description?: string;
    birthday?: Timestamp;
    color?: string;
}
