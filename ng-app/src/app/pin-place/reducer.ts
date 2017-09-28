import { Action, Reducer } from 'redux';
//
import { IPinPlace, PIN_PLACE_INIT_STATE } from './model';
import { PinPlaceAction, PinPlaceActions } from './actions';

export const pinPlaceReducer: Reducer<IPinPlace> =
  (state: IPinPlace = PIN_PLACE_INIT_STATE, a: Action): IPinPlace => {
    const action = a as PinPlaceAction;
    switch (action.type) {
      case PinPlaceActions.ADD_NEW_PLACE:
        return {...action.payload, loading: true};
      case PinPlaceActions.ADD_NEW_PLACE_COMPLETED:
        return {...action.payload, loading: false};
      case PinPlaceActions.TURN_ON_LOADING:
        return {...state, loading: true};
      default:
        return state;
    }
  };
