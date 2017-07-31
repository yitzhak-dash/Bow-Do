export interface IPlace {
  id?: number;
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

export const PLACE_INIT_STATE: IPlace = {
  name: ''
};
