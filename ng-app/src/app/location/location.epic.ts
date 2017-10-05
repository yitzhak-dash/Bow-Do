import { Injectable } from '@angular/core';
//
import { combineEpics, createEpicMiddleware, Epic } from 'redux-observable';
import { of } from 'rxjs/observable/of';
import * as GeoJSON from 'geojson';
//
import { LocationAction, LocationActions } from './location.actions';
import { IAppState } from '../store/root-state.model';
import { Locator } from '../services/locator';
import { EpicFactory } from '../common/epic.factory';
import { LocationService } from './location.service';

@Injectable()
export class LocationEpic implements EpicFactory {

  constructor(private locator: Locator,
              private actions: LocationActions,
              private service: LocationService) {
  }

  createEpic() {
    return createEpicMiddleware(
      combineEpics(
        this.locationEpic,
        this.sendLocationEpic
      ));
  }

  private locationEpic: Epic<LocationAction, IAppState> = (action$, state) =>
    action$.ofType(LocationActions.TAKE_LOCATION)
      .switchMap(action => this.locator.getCurrentLocation()
        .map((location: GeoJSON.Point) => {
          const currentLocation = {
            date: new Date(),
            location
          };
          this.actions.sendLocation(currentLocation);
          return this.actions.locationTaken(currentLocation);
        })
        .catch(error => of(this.actions.locationFailed(error))));

  private sendLocationEpic: Epic<LocationAction, IAppState> = (action$, state) =>
    action$.ofType(LocationActions.SEND_LOCATION)
      .switchMap(action => this.service.sendLocation(action.payload))
      .map(res => this.actions.locationSent(res))
      .catch(err => of(this.actions.sendLocationFailed(err)));

}
