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
    action$.ofType(PinPlaceActions.ADD_NEW_PLACE)
      .switchMap(action => this.locator.getCurrentLocation()
        .map(location => ({location, action}))
        .mergeMap((obj) =>
          this.service.pinPlace({...obj.action.payload.addedPlace, location: obj.location})
            .map(res => this.actions.pinPlaceCompleted({addedPlace: res, loading: false}))
            .catch(err => of(this.actions.pinPlaceFailed(err)))));
}
