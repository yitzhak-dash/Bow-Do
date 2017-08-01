import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import * as GeoJSON from 'geojson';
import { FluxStandardAction } from 'flux-standard-action';

type Payload = GeoJSON.Point;
export type LocationAction = FluxStandardAction<Payload, string>;

export const LOCATION_INIT_STATE: GeoJSON.Point = {
  type: 'Point',
  coordinates: [0, 0]
};

@Injectable()
export class LocationActions {

  static readonly TAKE_LOCATION = 'TAKE_LOCATION';
  static readonly TAKE_LOCATION_COMPLETED = 'TAKE_LOCATION_COMPLETED';
  static readonly TALE_LOCATION_FAILED = 'TAKE_LOCATION_FAILED';

  @dispatch()
  takeLocation = (): LocationAction => ({
    type: LocationActions.TAKE_LOCATION,
    payload: null,
    meta: null
  });

  locationTaken = (location: GeoJSON.Point): LocationAction => ({
    type: LocationActions.TAKE_LOCATION_COMPLETED,
    payload: location,
    meta: null
  });

  locationFailed = (error): LocationAction => ({
    type: LocationActions.TALE_LOCATION_FAILED,
    payload: null,
    meta: null,
    error
  });
}


