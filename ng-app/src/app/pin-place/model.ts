import * as GeoJSON from 'geojson';

export interface IPlace {
  id?: number;
  location?: GeoJSON.Point;
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
