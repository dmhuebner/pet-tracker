import Timestamp = firebase.firestore.Timestamp;
import * as firebase from 'firebase';

export interface PetShot {
    shot: string;
    date: Timestamp;
    vet: string;
    description?: string;
    reasonForShot: string;
    notes?: string;
}
