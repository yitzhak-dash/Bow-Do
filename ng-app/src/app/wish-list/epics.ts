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
import { WishItemAction, WishListActions } from './actions';
import { ShoppingListService } from './service';
import { EpicFactory } from '../common/epic.factory';

@Injectable()
export class WishListEpic implements EpicFactory {
  constructor(private actions: WishListActions,
              private service: ShoppingListService) {
  }

  public createEpic() {
    return createEpicMiddleware(
      combineEpics(
        this.createRemoveWishItemEpic,
        this.createAddWishItemEpic,
        this.createGetWishItemsEpic,
        this.createCompleteWishItemsEpic));
  }


  private createAddWishItemEpic: Epic<WishItemAction, IAppState> = (action$, store) =>
    action$
      .ofType(WishListActions.ADD_ITEM)
      .switchMap(action => this.service.addWishItems(action.payload)
        .map(data => this.actions.addWishItemSucceeded(data))
        .catch(response => of(this.actions.addWishItemFailed({
          status: '' + response.status,
        })))
        .startWith(this.actions.workOnWishItemListStarted()));

  private createRemoveWishItemEpic: Epic<WishItemAction, IAppState> = (action$, store) =>
    action$
      .ofType(WishListActions.REMOVE_ITEM)
      .switchMap(action => this.service.removeWishItems(action.payload)
        .map(data => this.actions.removeWishItemSucceeded(data))
        .catch(response => of(this.actions.removeWishItemFailed({status: '' + response.status})))
        .startWith(this.actions.workOnWishItemListStarted()));

  private createGetWishItemsEpic: Epic<WishItemAction, IAppState> = (action$, store) =>
    action$
      .ofType(WishListActions.LOAD_ITEMS)
      .switchMap(action => this.service.getWishItems()
        .map(data => this.actions.loadWishItemsSucceeded(data))
        .catch(response => of(this.actions.loadWishItemsFailed({status: '' + response.status})))
        .startWith(this.actions.workOnWishItemListStarted()));

  private createCompleteWishItemsEpic: Epic<WishItemAction, IAppState> = (action$, store) =>
    action$
      .ofType(WishListActions.CHANGE_ITEMS_STATUS)
      .switchMap(action => this.service.completeWishItems(action.payload)
        .map(data => this.actions.changeWishItemStatusSucceeded(data))
        .catch(response => of(this.actions.changeWishItemStatusFailed({status: '' + response.status})))
        .startWith(this.actions.workOnWishItemListStarted()));
}
