import { Action, Reducer } from 'redux';
//
import { LocationAction, LocationActions } from './location.actions';
import { CURRENT_LOCATION_INIT_STATE, ICurrentLocation } from './location.model';

export const locationReducer: Reducer<ICurrentLocation> =
  ((state: ICurrentLocation = CURRENT_LOCATION_INIT_STATE, a: Action) => {
    const action = a as LocationAction;
    switch (action.type) {
      case LocationActions.TAKE_LOCATION_COMPLETED:
        return {...action.payload};
      default:
        return state;
    }
  });
