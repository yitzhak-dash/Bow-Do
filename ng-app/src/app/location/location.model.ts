import * as GeoJSON from 'geojson';

export interface ICurrentLocation {
  date: Date;
  location: GeoJSON.Point;
}

export const LOCATION_INIT_STATE: GeoJSON.Point = {
  type: 'Point',
  coordinates: [0, 0]
};

export const CURRENT_LOCATION_INIT_STATE: ICurrentLocation = {
  date: new Date(),
  location: LOCATION_INIT_STATE,
};
