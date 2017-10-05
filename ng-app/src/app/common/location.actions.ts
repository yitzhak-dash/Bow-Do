import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { FluxStandardAction } from 'flux-standard-action';
//
import { ICurrentLocation } from './location.model';

type Payload = ICurrentLocation;
export type LocationAction = FluxStandardAction<Payload, string>;

@Injectable()
export class LocationActions {

  static readonly TAKE_LOCATION = 'TAKE_LOCATION';
  static readonly TAKE_LOCATION_COMPLETED = 'TAKE_LOCATION_COMPLETED';
  static readonly TAKE_LOCATION_FAILED = 'TAKE_LOCATION_FAILED';

  @dispatch()
  takeLocation = (): LocationAction => ({
    type: LocationActions.TAKE_LOCATION,
    payload: null,
    meta: null
  });

  locationTaken = (location: ICurrentLocation): LocationAction => ({
    type: LocationActions.TAKE_LOCATION_COMPLETED,
    payload: location,
    meta: null
  });

  locationFailed = (error): LocationAction => ({
    type: LocationActions.TAKE_LOCATION_FAILED,
    payload: null,
    meta: null,
    error
  });
}
