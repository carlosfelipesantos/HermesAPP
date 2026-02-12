export type VehicleType = 'Moto' | 'Van' | 'VUC' | 'Caminhao';
export type VehicleAvailability = 'Available' | 'Busy' | 'Inactive';

export interface Vehicle {
  id: string;           // ex: V-3001
  plate: string;        // ex: ABC1D23
  type: VehicleType;

  capacityKg: number;
  volumeM3: number;

  availability: VehicleAvailability;

  transporterId: string;
  transporterName: string;

  createdAt: string; // ISO
  notes?: string;
}
