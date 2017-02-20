import { Injectable } from '@angular/core';
//
import { Observable } from 'rxjs/Observable';
import { Action } from 'redux';
import { ActionsObservable, Epic } from 'redux-observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
//
import { Locator } from '../services/locator';
import { ShoppingListActions } from './shopping-list.actions';

@Injectable()
export class ShoppingListEpics {
  epics: Epic<Action,any>[] = [];

  constructor(private service: Locator) {
    this.epics = [this.foo];
  }

  foo = (action$: ActionsObservable<Action>) => action$
    .ofType(ShoppingListActions.FIND_EXCALIBUR)
    .mergeMap((pararam: any) => this.service.getCurrentLocation()
      .map((data: any) => {
        return {type: ShoppingListActions.EXCALIBUR_FOUND, data: `Excalibur was found in ${data}`}
      }))
    .catch(error => Observable.of({
      type: ShoppingListActions.ERROR,
      data: 'ERROR'
    }));

}

