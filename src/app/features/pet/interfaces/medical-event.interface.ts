import Timestamp = firebase.firestore.Timestamp;
import * as firebase from 'firebase';

export interface MedicalEvent {
    timestamp: Timestamp;
    type: 'Emergency' | 'Digestive' | 'Injury' | 'Surgery';
    summary: string;
    notes: string;
    medicalAttentionRequired: boolean;
}
