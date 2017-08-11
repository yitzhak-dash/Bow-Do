import { Action, Reducer } from 'redux';
//
import { IWishListState, WISH_LIST_INIT_STATE } from './model';
import { WishItemAction, WishListActions } from './actions';


export const wishesReducer: Reducer<IWishListState> =
  (state: IWishListState = WISH_LIST_INIT_STATE, a: Action): IWishListState => {
    const action = a as WishItemAction;
    switch (action.type) {
      case WishListActions.ADD_ITEM_STARTED:
        return {
          ...state,
          isLoading: true
        };
      case WishListActions.ADD_ITEM_SUCCEEDED:
        return {
          ...state,
          isLoading: false,
          wishList: [...state.wishList, action.payload]
        };
      case WishListActions.ADD_ITEM_FAILED:
        return {
          ...state,
          isLoading: false
        };
      case WishListActions.REMOVE_ITEM_STARTED:
        return {
          ...state,
          isLoading: true
        };
      case WishListActions.REMOVE_ITEM_SUCCEEDED:
        const index = state.wishList.findIndex(item => item.id === action.payload.id);
        if (index < 0) {
          return state;
        }
        return {
          ...state,
          isLoading: false,
          wishList: [
            ...state.wishList.slice(0, index),
            ...state.wishList.slice(index + 1)
          ]
        };
      case WishListActions.REMOVE_ITEM_FAILED:
        return {
          ...state,
          isLoading: false
        };
      default:
        return state;
    }
  };
