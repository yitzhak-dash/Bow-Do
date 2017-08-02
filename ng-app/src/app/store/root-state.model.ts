import * as GeoJSON from 'geojson';
//
import { IShoppingItem } from '../shopping-list/model';
import { IPlace, PLACE_INIT_STATE } from '../pin-place/model';
import { CURRENT_LOCATION_INIT_STATE, ICurrentLocation } from '../common/location.model';

export interface IAppState {
  routes?: any;
  shoppingList: IShoppingItem[];
  pinPlace: IPlace;
  location: ICurrentLocation
}


export const INIT_STATE: IAppState = {
  shoppingList: [],
  pinPlace: PLACE_INIT_STATE,
  location: CURRENT_LOCATION_INIT_STATE
};

