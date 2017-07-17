import { IShoppingItem } from '../shopping-list/model';
import { Place } from '../pin-place/model';

export interface  IAppState {
  routes?: any;
  shoppingList: IShoppingItem[];
  // pinPlace: PinPlaceState;
}

export interface PinPlaceState {
  place: Place;
  filteredTags: string[];
}


export const PLACE_INIT_STATE: Place = {name: ''};

export const INIT_STATE: IAppState = {
  shoppingList: [],
  // pinPlace: {
  //   place: PLACE_INIT_STATE,
  //   filteredTags: []
  // }
};

