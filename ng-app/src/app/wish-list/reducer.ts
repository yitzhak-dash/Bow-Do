import { Action, Reducer } from 'redux';
//
import { IWishItem, IWishListState, WISH_LIST_INIT_STATE } from './model';
import { WishItemAction, WishListActions } from './actions';
import { removeItems, updateItems } from '../common/reducer-helpers';


export const wishesReducer: Reducer<IWishListState> =
  (state: IWishListState = WISH_LIST_INIT_STATE, a: Action): IWishListState => {
    const action = a as WishItemAction;
    switch (action.type) {
      case WishListActions.WORK_ON_ITEM_LIST_STARTED:
        return {
          ...state,
          isLoading: true
        };
      case WishListActions.ADD_ITEM_SUCCEEDED:
        return {
          ...state,
          isLoading: false,
          wishList: [...state.wishList, ...action.payload]
        };
      case WishListActions.ADD_ITEM_FAILED:
        return {
          ...state,
          isLoading: false
        };
      case WishListActions.REMOVE_ITEM_SUCCEEDED:
        return {
          ...state,
          isLoading: false,
          wishList: [
            ...removeItems(
              state.wishList,
              action.payload,
              (item: IWishItem) => item.id)
          ]
        };
      case WishListActions.REMOVE_ITEM_FAILED:
        return {
          ...state,
          isLoading: false
        };
      case WishListActions.LOAD_ITEMS_SUCCEEDED:
        return {
          ...state,
          wishList: action.payload,
          isLoading: false
        };
      case WishListActions.LOAD_ITEMS_FAILED:
        return {
          ...state,
          isLoading: false
        };
      case WishListActions.COMPLETE_ITEM_SUCCEEDED:
        return {
          ...state,
          wishList: [
            ...updateItems(
              state.wishList,
              action.payload,
              (item: IWishItem) => item.id)
          ],
          isLoading: false
        };
      case WishListActions.COMPLETE_ITEM_FAILED:
        return {
          ...state,
          isLoading: false
        };
      default:
        return state;
    }
  };
