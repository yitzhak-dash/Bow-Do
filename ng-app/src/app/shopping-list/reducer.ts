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
      case ShoppingListActions.REMOVE_ITEM_SUCCEEDED:
        const index = state.findIndex(item => item.id === action.payload.id);
        if (index < 0) {
          return state;
        }
        return [
          ...state.slice(0, index),
          ...state.slice(index + 1)
        ];
      case ShoppingListActions.REMOVE_ITEM_FAILED:
        return state;
      default:
        return state;
    }
  };
