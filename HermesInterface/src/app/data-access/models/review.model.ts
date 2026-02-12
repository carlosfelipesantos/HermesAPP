export interface Review {
  id: string;
  freightId: string;

  transporterName: string;
  transporterId: string;

  customerName: string;

  rating: number; // 1..5
  comment: string;

  createdAt: string; // ISO
  dateLabel: string; // "11/02 14:20" (só visual)
}

export interface TransporterRatingSummary {
  transporterId: string;
  transporterName: string;

  average: number;
  totalReviews: number;

  lastComment?: string;
}

export interface ReviewsDashboardData {
  averageRating: number;
  totalReviews: number;
  ratedTransporters: number;

  topTransporters: TransporterRatingSummary[];
  latestReviews: Review[];
}
