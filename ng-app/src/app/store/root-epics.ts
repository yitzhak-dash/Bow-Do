import { Injectable } from '@angular/core';
//
import { ShoppingListEpic } from '../shopping-list/epics';
import { PinPlaceEpic } from '../pin-place/epics';
import { LocationEpic } from '../common/location.epic';

@Injectable()
export class RootEpics {
  constructor(private shoppingListEpic: ShoppingListEpic,
              private pinPlaceEpic: PinPlaceEpic,
              private locationEpic: LocationEpic) {
  }

  public createEpics() {
    return [
      this.locationEpic.createEpic(),
      this.shoppingListEpic.createEpic(),
      this.pinPlaceEpic.createEpic()];
  }
}
