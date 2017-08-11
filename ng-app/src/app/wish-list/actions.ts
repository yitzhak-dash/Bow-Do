import { Injectable } from '@angular/core';
//
import { dispatch } from '@angular-redux/store';
import { FluxStandardAction } from 'flux-standard-action';
//
import { IWishItem } from './model';

// Flux-standard-action gives us stronger typing of our actions.
type Payload = IWishItem;

export type WishItemAction = FluxStandardAction<Payload, string>;


@Injectable()
export class WishListActions {
  static readonly ADD_ITEM = 'ADD_ITEM';
  static readonly ADD_ITEM_STARTED = 'ADD_ITEM_STARTED';
  static readonly ADD_ITEM_SUCCEEDED = 'ADD_ITEM_SUCCEEDED';
  static readonly ADD_ITEM_FAILED = 'ADD_ITEM_FAILED';
  //
  static readonly REMOVE_ITEM = 'REMOVE_ITEM';
  static readonly REMOVE_ITEM_SUCCEEDED = 'REMOVE_ITEM_SUCCEEDED';
  static readonly REMOVE_ITEM_FAILED = 'REMOVE_ITEM_FAILED';

  @dispatch()
  addWishItem = (name: string): WishItemAction =>
    ({
      type: WishListActions.ADD_ITEM,
      payload: {name},
      meta: name
    });

  addWishItemStarted = (): WishItemAction => ({
    type: WishListActions.ADD_ITEM_STARTED,
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
    payload: item,
    meta: null
  });

  removeWishItemSucceeded = (item: IWishItem): WishItemAction => ({
    type: WishListActions.REMOVE_ITEM_SUCCEEDED,
    payload: item,
    meta: null
  });

  removeWishItemFailed = (error): WishItemAction =>
    ({
      type: WishListActions.ADD_ITEM_FAILED,
      payload: null,
      meta: null,
      error
    });
}
