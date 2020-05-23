import Timestamp = firebase.firestore.Timestamp;
import * as firebase from 'firebase';
import { MedicalInfo } from './medical-info.interface';

export interface Pet {
    id: string; // TODO id prop should be required
    userId: string;
    name: string;
    animalType: string;
    profileImages: string[];
    breed?: string;
    description?: string;
    birthday?: Timestamp;
    color?: string;
    sex?: string;
    medical?: MedicalInfo;
}
