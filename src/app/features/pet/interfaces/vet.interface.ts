export interface Vet {
    name: string;
    phone?: string;
    emergencyPhone?: string;
    address?: string;
    vetType: 'Clinic' | 'Emergency' | 'Clinic/Emergency';
    website?: string;
    primary?: boolean;
    drName?: string;
}
