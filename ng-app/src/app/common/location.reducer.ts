import { Action, Reducer } from 'redux';
import * as GeoJson from 'geojson';
//
import { LOCATION_INIT_STATE, LocationAction, LocationActions } from './location.actions';

export const locationReducer: Reducer<GeoJson.Point> =
  ((state: GeoJson.Point = LOCATION_INIT_STATE, a: Action) => {
    const action = a as LocationAction;
    switch (action.type) {
      case LocationActions.TAKE_LOCATION_COMPLETED:
        return {...action.payload};
      default:
        return state;
    }
  });
