import { Injectable } from '@angular/core';




@Injectable()
export class PinPlaceActions {
  static readonly ADD_NEW_PLACE = 'ADD_NEW_PLACE';
  static readonly ADD_NEW_PLACE_COMPLETED = 'ADD_NEW_PLACE_COMPLETED';
  static readonly ADD_NEW_PLACE_FAILED = 'ADD_NEW_PLACE_FAILED';
  static readonly FILTER_TAGS = 'FILTER_TAGS';
  static readonly FILTER_TAGS_COMPLETED = 'FILTER_TAGS_COMPLETED';
  static readonly TAG_PLACE = 'TAG_PLACE';

  addNewPlace = () => {

  }
}
