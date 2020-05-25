import { PetShot } from './pet-shot.interface';
import { Medication } from './medication.interface';
import { MedicalEvent } from './medical-event.interface';

export interface MedicalInfo {
    shots?: PetShot[];
    medications?: Medication[]
    medicalEvents?: MedicalEvent[];
}
