import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
//
import { IPinPlace, IPlace } from './model';
import { FluxStandardAction } from 'flux-standard-action';

type Payload = IPinPlace;
export type PinPlaceAction = FluxStandardAction<Payload, string>;

@Injectable()
export class PinPlaceActions {
  static readonly ADD_NEW_PLACE = 'ADD_NEW_PLACE';
  static readonly ADD_NEW_PLACE_COMPLETED = 'ADD_NEW_PLACE_COMPLETED';
  static readonly ADD_NEW_PLACE_FAILED = 'ADD_NEW_PLACE_FAILED';
  static readonly TURN_ON_LOADING = 'TURN_ON_LOADING';
  static readonly FILTER_TAGS = 'FILTER_TAGS';
  static readonly FILTER_TAGS_COMPLETED = 'FILTER_TAGS_COMPLETED';
  static readonly TAG_PLACE = 'TAG_PLACE';

  @dispatch()
  turnOnLoading = (): PinPlaceAction => ({
    type: PinPlaceActions.TURN_ON_LOADING,
    payload: null,
    meta: null
  });

  @dispatch()
  addNewPlace = (place: IPlace): PinPlaceAction => ({
    type: PinPlaceActions.ADD_NEW_PLACE,
    payload: {addedPlace: place, loading: true},
    meta: null
  });

  pinPlaceCompleted = (place: IPlace): PinPlaceAction => ({
    type: PinPlaceActions.ADD_NEW_PLACE_COMPLETED,
    payload: {addedPlace: place, loading: false},
    meta: null,
  });

  pinPlaceFailed = (error): PinPlaceAction =>
    ({
      type: PinPlaceActions.ADD_NEW_PLACE_FAILED,
      payload: null,
      meta: null,
      error
    });
}
