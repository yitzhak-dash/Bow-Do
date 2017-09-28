import { Injectable } from '@angular/core';
//
import { of } from 'rxjs/observable/of';
import { createEpicMiddleware, Epic } from 'redux-observable';
import 'rxjs/add/operator/mergeMap';
//
import { PinPlaceAction, PinPlaceActions } from './actions';
import { PinPlaceService } from './service';
import { EpicFactory } from '../common/epic.factory';
import { IAppState } from '../store/root-state.model';
import { Locator } from '../services/locator';

@Injectable()
export class PinPlaceEpic implements EpicFactory {

  constructor(private actions: PinPlaceActions,
              private service: PinPlaceService,
              private locator: Locator) {
  }

  public createEpic() {
    return createEpicMiddleware(this.pinPlaceEpic);
  }

  private pinPlaceEpic: Epic<PinPlaceAction, IAppState> = (action$, state) =>
    action$
      .ofType(PinPlaceActions.ADD_NEW_PLACE)
      .switchMap(action => this.service.pinPlace(action.payload.addedPlace)
        .map(res => this.actions.pinPlaceCompleted(res))
        .catch(err => of(this.actions.pinPlaceFailed(err))));
}
