import { combineReducers } from 'redux';
//
import { AppState } from './app-state';
import { shoppingList } from './shopping-list.reducer';
import { pinPlace } from './pin-place.reducer';

// The name of each reducer property must be the same as the name of the state properties
export const rootReducer = combineReducers<AppState>({
  shoppingList,
  pinPlace
});



