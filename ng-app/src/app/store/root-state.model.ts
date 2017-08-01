import * as GeoJSON from 'geojson';
//
import { IShoppingItem } from '../shopping-list/model';
import { IPlace, PLACE_INIT_STATE } from '../pin-place/model';
import { LOCATION_INIT_STATE } from '../common/location.actions';

export interface IAppState {
  routes?: any;
  shoppingList: IShoppingItem[];
  pinPlace: IPlace;
  location: GeoJSON.Point
}


export const INIT_STATE: IAppState = {
  shoppingList: [],
  pinPlace: PLACE_INIT_STATE,
  location: LOCATION_INIT_STATE
};

