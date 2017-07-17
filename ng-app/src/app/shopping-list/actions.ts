import { Injectable } from '@angular/core';
//
import { Action, Reducer } from 'redux';
import { dispatch, NgRedux } from '@angular-redux/store';
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

}
