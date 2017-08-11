import { Injectable } from '@angular/core';
//
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/startWith';
import { combineEpics, createEpicMiddleware, Epic } from 'redux-observable';
//
import { IAppState } from '../store/root-state.model';
import { ShoppingItemAction, ShoppingListActions } from './actions';
import { ShoppingListService } from './service';
import { EpicFactory } from '../common/epic.factory';

@Injectable()
export class ShoppingListEpic implements EpicFactory {
  constructor(private actions: ShoppingListActions,
              private service: ShoppingListService) {
  }

  public createEpic() {
    return createEpicMiddleware(
      combineEpics(
        this.createRemoveWishItemEpic,
        this.createAddShoppingItemEpic));
  }


  private createAddShoppingItemEpic: Epic<ShoppingItemAction, IAppState> = (action$, store) =>
    action$
      .ofType(ShoppingListActions.ADD_ITEM)
      .switchMap(action => this.service.addShoppingListItem(action.payload)
        .map(data => this.actions.addShoppingItemSucceeded(data))
        .catch(response => of(this.actions.addShoppingItemFailed({
          status: '' + response.status,
        })))
        .startWith(this.actions.addShoppingItemStarted()));

  private createRemoveWishItemEpic: Epic<ShoppingItemAction, IAppState> = (action$, store) =>
    action$
      .ofType(ShoppingListActions.REMOVE_ITEM)
      .switchMap(action => this.service.removeWishItem(action.payload)
        .map(data => this.actions.removeWishItemSucceeded(data))
        .catch(response => of(this.actions.removeWishItemFailed({status: '' + response.status})))
      );
}
