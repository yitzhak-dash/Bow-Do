import { Injectable } from '@angular/core';
//
import { ActionsObservable } from 'redux-observable';
import { Action } from 'redux';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
//
import { LocationService } from '../services/location.service';
import {
  ADD_NEW_PLACE,
  ADD_NEW_PLACE_COMPLETED,
  FILTER_TAGS,
  FILTER_TAGS_COMPLETED
} from './pin-place.actions';


@Injectable()
export class PinPlaceEpics {

  epics: any[];

  constructor(private service: LocationService) {
    this.epics = [this.addPlace, this.filterTags];
  }

  addPlace = (action$: ActionsObservable<Action>) => {
    return action$.ofType(ADD_NEW_PLACE)
      .switchMap(action => {
        return this.service.addNewPlace(action.data)
          .map(res => {
            return {type: ADD_NEW_PLACE_COMPLETED, data: res}
          })
      })
      .catch(err => {
        return Observable.of({type: 'ERROR', error: err})
      });
  };

  filterTags = (action$: ActionsObservable<Action>) => {
    return action$.ofType(FILTER_TAGS)
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(action => {
        return action.data
          ? this.service.getTagsByTerm(action.data).map(res => {
            return {type: FILTER_TAGS_COMPLETED, data: res};
          })
          : Observable.of<string[]>([]).map(res => {
            return {type: FILTER_TAGS_COMPLETED, data: res};
          })
      })
  };

}
