import { MedicationFrequency } from './medication-frequency.interface';
import Timestamp = firebase.firestore.Timestamp;
import * as firebase from 'firebase';

export interface Medication {
    name: string;
    description?: string;
    instructions: string;
    startDate: Timestamp,
    // frequency?: MedicationFrequency,
    freqAmount: number;
    freqInterval: 'Hour' | 'Day' | 'Week' | 'Month' | 'Year';
    endDate?: Timestamp,
    vet?: string;
    complete?: boolean;
    permanent?: boolean;
}
