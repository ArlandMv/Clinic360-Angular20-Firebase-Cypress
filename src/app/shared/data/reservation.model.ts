export interface Reservation {
  id: number;
  clinicId: number;
  date: Date;
  channel: 'web' | 'teléfono' | 'app';
  patientName: string;
  attended: boolean;
  procedureType: string;
}
