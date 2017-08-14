import { Injectable } from '@angular/core';
//
import { dispatch } from '@angular-redux/store';
import { FluxStandardAction } from 'flux-standard-action';
//
import { IWishItem } from './model';

// Flux-standard-action gives us stronger typing of our actions.
type Payload = IWishItem[];

export type WishItemAction = FluxStandardAction<Payload, string>;


@Injectable()
export class WishListActions {
  static readonly WORK_ON_ITEM_LIST_STARTED = 'WORK_ON_ITEM_LIST_STARTED';
  //
  static readonly LOAD_ITEMS = 'LOAD_ITEMS';
  static readonly LOAD_ITEMS_SUCCEEDED = 'LOAD_ITEMS_SUCCEEDED';
  static readonly LOAD_ITEMS_FAILED = 'LOAD_ITEMS_FAILED';
  //
  static readonly ADD_ITEM = 'ADD_ITEM';
  static readonly ADD_ITEM_SUCCEEDED = 'ADD_ITEM_SUCCEEDED';
  static readonly ADD_ITEM_FAILED = 'ADD_ITEM_FAILED';
  //
  static readonly REMOVE_ITEM = 'REMOVE_ITEM';
  static readonly REMOVE_ITEM_SUCCEEDED = 'REMOVE_ITEM_SUCCEEDED';
  static readonly REMOVE_ITEM_FAILED = 'REMOVE_ITEM_FAILED';
  //
  static readonly CHANGE_ITEMS_STATUS = 'CHANGE_ITEMS_STATUS';
  static readonly CHANGE_ITEMS_STATUS_SUCCEEDED = 'CHANGE_ITEMS_STATUS_SUCCEEDED';
  static readonly CHANGE_ITEMS_STATUS_FAILED = 'CHANGE_ITEMS_STATUS_FAILED';

  @dispatch()
  addWishItem = (name: string): WishItemAction =>
    ({
      type: WishListActions.ADD_ITEM,
      payload: [{name}],
      meta: name
    });

  workOnWishItemListStarted = (): WishItemAction => ({
    type: WishListActions.WORK_ON_ITEM_LIST_STARTED,
    payload: null,
    meta: null
  });

  addWishItemSucceeded = (payload: Payload): WishItemAction => ({
    type: WishListActions.ADD_ITEM_SUCCEEDED,
    payload,
    meta: null
  });

  addWishItemFailed = (error): WishItemAction =>
    ({
      type: WishListActions.ADD_ITEM_FAILED,
      payload: null,
      meta: null,
      error
    });

  @dispatch()
  removeWishItem = (item: IWishItem): WishItemAction => ({
    type: WishListActions.REMOVE_ITEM,
    payload: [item],
    meta: null
  });

  removeWishItemSucceeded = (items: IWishItem[]): WishItemAction => ({
    type: WishListActions.REMOVE_ITEM_SUCCEEDED,
    payload: items,
    meta: null
  });

  removeWishItemFailed = (error): WishItemAction =>
    ({
      type: WishListActions.ADD_ITEM_FAILED,
      payload: null,
      meta: null,
      error
    });

  @dispatch()
  loadWishItems = (): WishItemAction => ({
    type: WishListActions.LOAD_ITEMS,
    payload: null,
    meta: null
  });

  loadWishItemsSucceeded = (items: IWishItem[]): WishItemAction => ({
    type: WishListActions.LOAD_ITEMS_SUCCEEDED,
    payload: items,
    meta: null
  });

  loadWishItemsFailed = (error): WishItemAction => ({
    type: WishListActions.LOAD_ITEMS_FAILED,
    payload: null,
    meta: null,
    error
  });

  @dispatch()
  changeWishItemStatus = (item: IWishItem): WishItemAction => ({
    type: WishListActions.CHANGE_ITEMS_STATUS,
    payload: [item],
    meta: null
  });

  changeWishItemStatusSucceeded = (items: IWishItem[]): WishItemAction => ({
    type: WishListActions.CHANGE_ITEMS_STATUS_SUCCEEDED,
    payload: items,
    meta: null
  });

  changeWishItemStatusFailed = (error): WishItemAction => ({
    type: WishListActions.CHANGE_ITEMS_STATUS_FAILED,
    payload: null,
    meta: null,
    error
  });

}
