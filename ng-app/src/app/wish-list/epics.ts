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
        this.createAddWishItemEpic));
  }


  private createAddWishItemEpic: Epic<WishItemAction, IAppState> = (action$, store) =>
    action$
      .ofType(WishListActions.ADD_ITEM)
      .switchMap(action => this.service.addWishListItem(action.payload)
        .map(data => this.actions.addWishItemSucceeded(data))
        .catch(response => of(this.actions.addWishItemFailed({
          status: '' + response.status,
        })))
        .startWith(this.actions.addWishItemStarted()));

  private createRemoveWishItemEpic: Epic<WishItemAction, IAppState> = (action$, store) =>
    action$
      .ofType(WishListActions.REMOVE_ITEM)
      .switchMap(action => this.service.removeWishItem(action.payload)
        .map(data => this.actions.removeWishItemSucceeded(data))
        .catch(response => of(this.actions.removeWishItemFailed({status: '' + response.status})))
      );
}
