import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
//
import { IPlace } from './model';
import { FluxStandardAction } from 'flux-standard-action';

type Payload = IPlace;
export type PinPlaceAction = FluxStandardAction<Payload, string>;

@Injectable()
export class PinPlaceActions {
  static readonly ADD_NEW_PLACE = 'ADD_NEW_PLACE';
  static readonly ADD_NEW_PLACE_COMPLETED = 'ADD_NEW_PLACE_COMPLETED';
  static readonly ADD_NEW_PLACE_FAILED = 'ADD_NEW_PLACE_FAILED';
  static readonly FILTER_TAGS = 'FILTER_TAGS';
  static readonly FILTER_TAGS_COMPLETED = 'FILTER_TAGS_COMPLETED';
  static readonly TAG_PLACE = 'TAG_PLACE';

  @dispatch()
  addNewPlace = (place: IPlace): PinPlaceAction => ({
    type: PinPlaceActions.ADD_NEW_PLACE,
    payload: place,
    meta: null
  });

  pinPlaceCompleted = (place: IPlace): PinPlaceAction => ({
    type: PinPlaceActions.ADD_NEW_PLACE_COMPLETED,
    payload: place,
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
