export type UserRole = 'Customer' | 'Transporter';
export type UserStatus = 'Active' | 'Inactive';

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;

  role: UserRole;
  status: UserStatus;

  createdAt: string; // ISO
  rating?: number; // só para transportador
  activeVehicles?: number; // só para transportador
}

export interface UserFreightHistoryItem {
  id: string;
  statusLabel: string;
  statusTone: 'neutral' | 'warn' | 'ok' | 'bad';
  origin: string;
  destination: string;
  valueLabel: string;
  dateLabel: string; // "10/02 14:20"
}

export interface UserDetails {
  user: User;
  stats: {
    totalFreights: number;
    doneFreights: number;
    canceledFreights: number;
  };
  history: UserFreightHistoryItem[];
}
