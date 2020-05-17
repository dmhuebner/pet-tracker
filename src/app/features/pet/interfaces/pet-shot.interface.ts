import Timestamp = firebase.firestore.Timestamp;
import * as firebase from 'firebase';

export interface PetShot {
    shot: string;
    date: Timestamp;
    vetName: string;
    description?: string;
    reasonForShot: string;
    notes?: string;
}
