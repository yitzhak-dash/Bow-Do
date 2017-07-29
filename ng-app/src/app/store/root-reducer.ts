import { combineReducers } from 'redux';
import { composeReducers, defaultFormReducer } from '@angular-redux/form';
import { routerReducer } from '@angular-redux/router';
import { shoppingListReducer } from '../shopping-list/reducer';
import { pinPlaceReducer } from '../pin-place/reducer';


// Define the global store shape by combining our application's
// reducers together into a given structure.
export const rootReducer = composeReducers(
  defaultFormReducer(),
  combineReducers({
    pinPlace: pinPlaceReducer,
    shoppingList: shoppingListReducer,
    router: routerReducer,
  }));
