import { Injectable } from '@angular/core';
//
import { NgRedux } from 'ng2-redux';
//
import { AppState } from './app-state';

@Injectable()
export class ShoppingListActions {
  static ADD_ITEM = 'ADD_ITEM';
  static FIND_EXCALIBUR = 'FIND_EXCALIBUR';
  static EXCALIBUR_FOUND = 'EXCALIBUR_FOUND';
  static ERROR = 'ERROR';

  constructor(private redux: NgRedux<AppState>) {
  }

  addShoppingItem = (name: any) => this.redux.dispatch({type: ShoppingListActions.ADD_ITEM, data: name});

  excaliburFound = (data: any): any => this.redux.dispatch({type: ShoppingListActions.EXCALIBUR_FOUND, data: data});

  findExcalibur = (data: any): any => this.redux.dispatch({type: ShoppingListActions.FIND_EXCALIBUR, data: data});

  error = (data: any): any => this.redux.dispatch({type: ShoppingListActions.ERROR, data: data});

}
