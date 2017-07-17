export interface Place {
  loc?: {
    type: string,
    coordinates: number[],
  };
  address?: {
    city: string,
    zip?: string,
    state?: string,
    country: string,
    lines?: string[],
  };
  placedIn?: string;
  name?: string;
  description?: string;
  tags?: string[];
}
