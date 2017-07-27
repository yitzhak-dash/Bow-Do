export interface Place {
  location?: {
    type: string;
    coordinates: { lat: number, long: number };
  };
  address?: {
    city: string;
    zip?: string;
    state?: string;
    country: string;
    lines?: string[];
  };
  placedIn?: string;
  name: string;
  description?: string;
  tags?: string[];
}
