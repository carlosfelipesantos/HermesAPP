export type FreightStatus = 'Draft' | 'InProgress' | 'Done' | 'Canceled';

export interface Freight {
  id: string;
  originCity: string;
  destinationCity: string;
  status: FreightStatus;
  price: number;
  createdAt: string; // ISO
}
