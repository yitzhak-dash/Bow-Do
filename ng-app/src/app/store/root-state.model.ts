import { IShoppingItem } from '../shopping-list/model';
import { Place, PLACE_INIT_STATE } from '../pin-place/model';

export interface IAppState {
  routes?: any;
  shoppingList: IShoppingItem[];
  pinPlace: Place;
}


export const INIT_STATE: IAppState = {
  shoppingList: [],
  pinPlace: PLACE_INIT_STATE
};

