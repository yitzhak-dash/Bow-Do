import { Action, Reducer } from 'redux';
//
import { IPlace, PLACE_INIT_STATE } from './model';
import { PinPlaceAction, PinPlaceActions } from './actions';

export const pinPlaceReducer: Reducer<IPlace> =
  (state: IPlace = PLACE_INIT_STATE, a: Action): IPlace => {
    const action = a as PinPlaceAction;
    switch (action.type) {
      case PinPlaceActions.ADD_NEW_PLACE_COMPLETED:
        return {...action.payload};
      default:
        return state;
    }
  };
