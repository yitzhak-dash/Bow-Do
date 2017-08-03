//
import { IShoppingItem } from '../shopping-list/model';
import { IPlace, PIN_PLACE_INIT_STATE } from '../pin-place/model';
import { CURRENT_LOCATION_INIT_STATE, ICurrentLocation } from '../common/location.model';

export interface IAppState {
  routes?: any;
  shoppingList: IShoppingItem[];
  pinPlace: {
    loading: boolean,
    addedPlace: IPlace
  };
  location: ICurrentLocation
}


export const INIT_STATE: IAppState = {
  shoppingList: [],
  pinPlace: PIN_PLACE_INIT_STATE,
  location: CURRENT_LOCATION_INIT_STATE
};

