import { Injectable } from '@angular/core';
//
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/startWith';
import { createEpicMiddleware, Epic } from 'redux-observable';
//
import { IAppState } from '../store/root-state.model';
import { ShoppingItemAction, ShoppingListActions } from './actions';
import { ShoppingListService } from "./service";

@Injectable()
export class ShoppingListEpic {
  constructor(private actions: ShoppingListActions,
              private service: ShoppingListService) {
  }

  public createEpic() {
    return createEpicMiddleware(this.createAddShoppingItemEpic);
  }


  private createAddShoppingItemEpic: Epic<ShoppingItemAction, IAppState> = (action$, store) =>
    action$
      .ofType(ShoppingListActions.ADD_ITEM)
      // .filter(() => animalsNotAlreadyFetched(animalType, store.getState()))
      .switchMap(action => this.service.addShoppingListItem(action.payload)
        .map(data => this.actions.addShoppingItemSucceeded(data))
        .catch(response => of(this.actions.addShoppingItemFailed({
          status: '' + response.status,
        })))
        .startWith(this.actions.addShoppingItemStarted()))
}

// .catch(err => of({ type: 'ERROR', payload: { error: err } }));
