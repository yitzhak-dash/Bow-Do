import { Injectable } from '@angular/core';
//
import { NgRedux } from 'ng2-redux';
//
import { AppState } from './app-state';
import { Place } from '../models/place.model';

export const ADD_NEW_PLACE = 'ADD_NEW_PLACE';
export const ADD_NEW_PLACE_COMPLETED = 'ADD_NEW_PLACE_COMPLETED';
export const FILTER_TAGS = 'FILTER_TAGS';
export const FILTER_TAGS_COMPLETED = 'FILTER_TAGS_COMPLETED';
export const INIT_PLACE = 'INIT_PLACE';
export const TAG_PLACE = 'TAG_PLACE';


@Injectable()
export class PinPlaceActions {


  constructor(private redux: NgRedux<AppState>) {
  }

  addNewPlace = (place: Place) => this.redux.dispatch(
    {type: ADD_NEW_PLACE, data: place}
  );

  filterTags = (term: string) => this.redux.dispatch(
    {type: FILTER_TAGS, data: term});

  initPlace = () => this.redux.dispatch({type: INIT_PLACE});

  tagPlace = (param: {place: Place; tagName: string}) =>
    this.redux.dispatch({type: TAG_PLACE, data: param});
}
