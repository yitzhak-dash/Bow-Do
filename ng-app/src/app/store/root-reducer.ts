import { combineReducers } from 'redux';
//
import { AppState } from './app-state';
import { ShoppingListActions } from './shopping-list.actions';
import { shoppingList } from './shopping-list.reducer';

// The name of each reducer property must be the same as the name of the state properties
export const rootReducer = combineReducers<AppState>({
  shoppingList
});



