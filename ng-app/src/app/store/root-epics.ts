import { Injectable } from '@angular/core';
//
import { WishListEpic } from '../wish-list/epics';
import { PinPlaceEpic } from '../pin-place/epics';
import { LocationEpic } from '../location/location.epic';

@Injectable()
export class RootEpics {
  constructor(private shoppingListEpic: WishListEpic,
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
