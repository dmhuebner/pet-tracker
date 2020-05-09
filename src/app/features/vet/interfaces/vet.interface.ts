import Timestamp = firebase.firestore.Timestamp;
import * as firebase from 'firebase';

export interface Vet {
    name: string;
    id: string;
    petIds: string[];
    phone?: string;
    emergencyPhone?: string;
    address?: string;
    vetType: 'Clinic' | 'Emergency' | 'Clinic/Emergency';
    website?: string;
    primary?: boolean;
    drName?: string;
    firstVisit?: Timestamp;
}
