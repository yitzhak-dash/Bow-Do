import { Injectable } from '@angular/core';
import { ShoppingListEpic } from '../shopping-list/epics';

@Injectable()
export class RootEpics {
  constructor(private shoppingListEpic: ShoppingListEpic) {
  }

  public createEpics() {
    return [this.shoppingListEpic.createEpic()];
  }
}
