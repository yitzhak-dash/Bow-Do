import { Action, Reducer } from 'redux';
//
import { IShoppingItem } from './model';
import { ShoppingItemAction, ShoppingListActions } from './actions';

const INITIAL_STATE: IShoppingItem[] = [];

export const shoppingListReducer: Reducer<IShoppingItem[]> =
  (state: IShoppingItem[] = INITIAL_STATE, a: Action): IShoppingItem[] => {
    const action = a as ShoppingItemAction;
    switch (action.type) {
      case ShoppingListActions.ADD_ITEM_STARTED:
        return state;
      case ShoppingListActions.ADD_ITEM_SUCCEEDED:
        return [...state, action.payload];
      case ShoppingListActions.ADD_ITEM_FAILED:
        return state;
      default:
        return state;
    }
  };
