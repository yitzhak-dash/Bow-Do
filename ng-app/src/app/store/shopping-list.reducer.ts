import { Reducer } from 'redux';
//
import { ShoppingListActions } from './shopping-list.actions';
import { ShoppingItem } from './app-state';

export const shoppingList: Reducer<ShoppingItem[]> = (state: any, action: any) => {
  switch (action.type) {
    case ShoppingListActions.ADD_ITEM:
      let newShoppingItem: ShoppingItem = {name: action.data, id: +new Date};
      return state.concat([newShoppingItem]);
    default:
      return state || [];
  }
};
