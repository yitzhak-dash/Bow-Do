import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { AppState } from './app-state';

@Injectable()
export class ShoppingListActions {
  static ADD_ITEM = 'ADD_ITEM';

  constructor(private redux: NgRedux<AppState>) {
  }

  addShoppingItem = (name: any) => this.redux.dispatch({type: ShoppingListActions.ADD_ITEM, data: name});
}
