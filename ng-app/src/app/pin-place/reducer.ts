import { Action, Reducer } from 'redux';
//
import { Place, PLACE_INIT_STATE } from './model';
import { PinPlaceAction, PinPlaceActions } from './actions';

export const pinPlaceReducer: Reducer<Place> =
  (state: Place = PLACE_INIT_STATE, a: Action): Place => {
    const action = a as PinPlaceAction;
    switch (action.type) {
      case PinPlaceActions.ADD_NEW_PLACE:
        return {...action.payload};
      default:
        return state;
    }
  };

