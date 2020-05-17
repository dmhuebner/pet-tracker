import { PetShot } from './pet-shot.interface';
import { Medication } from './medication.interface';

export interface MedicalInfo {
    shots?: PetShot[];
    medications?: Medication[]
}
