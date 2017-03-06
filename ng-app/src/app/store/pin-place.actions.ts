import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { AppState } from './app-state';

@Injectable()
export class PinPlaceService {

  static ADD_NEW_PLACE = 'ADD_NEW_PLACE';
  static ADD_NEW_PLACE_COMPLETED = 'ADD_NEW_PLACE_COMPLETED';

  constructor(private redux: NgRedux<AppState>) {
  }

  addNewPlace = (name: string, description: string) => this.redux.dispatch(
    {type: PinPlaceService.ADD_NEW_PLACE, data: {name, description}}
  );

}
