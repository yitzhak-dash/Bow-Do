import { IShoppingItem } from '../shopping-list/model';
import { IPlace, PLACE_INIT_STATE } from '../pin-place/model';

export interface IAppState {
  routes?: any;
  shoppingList: IShoppingItem[];
  pinPlace: IPlace;
}


export const INIT_STATE: IAppState = {
  shoppingList: [],
  pinPlace: PLACE_INIT_STATE
};

