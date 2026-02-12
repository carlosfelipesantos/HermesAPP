export interface DashboardKpis {
  requestedFreights: number;
  inProgressFreights: number;
  doneFreights: number;
  usersCount: number;
  activeTransporters: number;
  averageRating: number; // 0..5
}

export type AlertType = 'NewFreight' | 'Operational' | 'System';

export interface DashboardAlert {
  id: string;
  type: AlertType;
  title: string;
  description: string;
  timeLabel: string; // "há 2 min"
}

export interface DashboardLatestFreight {
  id: string;
  statusLabel: string; // "Solicitado" etc
  statusTone: 'neutral' | 'warn' | 'ok' | 'bad';
  origin: string;
  destination: string;
  valueLabel: string; // "R$ 1.250,00"
  transporterLabel: string; // "—" ou nome
}

export interface DashboardData {
  kpis: DashboardKpis;
  latestFreights: DashboardLatestFreight[];
  alerts: DashboardAlert[];
}
