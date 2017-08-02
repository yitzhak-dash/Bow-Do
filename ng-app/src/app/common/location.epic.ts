import { Injectable } from '@angular/core';
import { createEpicMiddleware, Epic } from 'redux-observable';
import { of } from 'rxjs/observable/of';
//
import { EpicFactory } from './epic.factory';
import { LocationAction, LocationActions } from './location.actions';
import { IAppState } from '../store/root-state.model';
import { Locator } from '../services/locator';

@Injectable()
export class LocationEpic implements EpicFactory {

  constructor(private locator: Locator,
              private actions: LocationActions) {
  }

  createEpic() {
    return createEpicMiddleware(this.locationEpic);
  }

  private locationEpic: Epic<LocationAction, IAppState> = (action$, state) =>
    action$.ofType(LocationActions.TAKE_LOCATION)
      .switchMap(action => this.locator.getCurrentLocation()
        .map(location => this.actions.locationTaken({
          date: new Date(),
          location
        }))
        .catch(error => of(this.actions.locationFailed(error))));

}
