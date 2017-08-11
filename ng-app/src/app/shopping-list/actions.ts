import { Injectable } from '@angular/core';
//
import { dispatch } from '@angular-redux/store';
import { FluxStandardAction } from 'flux-standard-action';
//
import { IShoppingItem } from './model';

// Flux-standard-action gives us stronger typing of our actions.
type Payload = IShoppingItem;

export type ShoppingItemAction = FluxStandardAction<Payload, string>;


@Injectable()
export class ShoppingListActions {
  static readonly ADD_ITEM = 'ADD_ITEM';
  static readonly ADD_ITEM_STARTED = 'ADD_ITEM_STARTED';
  static readonly ADD_ITEM_SUCCEEDED = 'ADD_ITEM_SUCCEEDED';
  static readonly ADD_ITEM_FAILED = 'ADD_ITEM_FAILED';
  //
  static readonly REMOVE_ITEM = 'REMOVE_ITEM';
  static readonly REMOVE_ITEM_SUCCEEDED = 'REMOVE_ITEM_SUCCEEDED';
  static readonly REMOVE_ITEM_FAILED = 'REMOVE_ITEM_FAILED';

  @dispatch()
  addShoppingItem = (name: string): ShoppingItemAction =>
    ({
      type: ShoppingListActions.ADD_ITEM,
      payload: {name},
      meta: name
    });

  addShoppingItemStarted = (): ShoppingItemAction => ({
    type: ShoppingListActions.ADD_ITEM_STARTED,
    payload: null,
    meta: null
  });

  addShoppingItemSucceeded = (payload: Payload): ShoppingItemAction => ({
    type: ShoppingListActions.ADD_ITEM_SUCCEEDED,
    payload,
    meta: null
  });

  addShoppingItemFailed = (error): ShoppingItemAction =>
    ({
      type: ShoppingListActions.ADD_ITEM_FAILED,
      payload: null,
      meta: null,
      error
    });

  @dispatch()
  removeWishItem = (item: IShoppingItem): ShoppingItemAction => ({
    type: ShoppingListActions.REMOVE_ITEM,
    payload: item,
    meta: null
  });

  removeWishItemSucceeded = (item: IShoppingItem): ShoppingItemAction => ({
    type: ShoppingListActions.REMOVE_ITEM_SUCCEEDED,
    payload: item,
    meta: null
  });

  removeWishItemFailed = (error): ShoppingItemAction =>
    ({
      type: ShoppingListActions.ADD_ITEM_FAILED,
      payload: null,
      meta: null,
      error
    });
}
