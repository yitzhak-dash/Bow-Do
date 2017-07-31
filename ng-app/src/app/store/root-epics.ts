import { Injectable } from '@angular/core';
import { ShoppingListEpic } from '../shopping-list/epics';
import { PinPlaceEpic } from '../pin-place/epics';

@Injectable()
export class RootEpics {
  constructor(private shoppingListEpic: ShoppingListEpic,
              private pinPlaceEpic: PinPlaceEpic) {
  }

  public createEpics() {
    return [
      this.shoppingListEpic.createEpic(),
      this.pinPlaceEpic.createEpic()];
  }
}
