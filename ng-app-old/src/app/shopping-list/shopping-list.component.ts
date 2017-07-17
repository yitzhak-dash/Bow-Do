import { Component, OnInit } from '@angular/core';
//
import { select, NgRedux } from 'ng2-redux';
//
import { ShoppingListActions } from '../store/shopping-list.actions';
import { ShoppingItem, AppState } from '../store/app-state';

@Component({
  moduleId: module.id,
  selector: 'shopping-list',
  template: `
    <div>
      <h2>Shopping List</h2>
      <ul>
        <li *ngFor="let item of shoppingList$ | async">
          <input type="checkbox" value="completed"/>{{item.name}}
        </li>
      </ul>
      <input #itemInput (keypress)="createItem($event,itemInput)"/>
    </div>`
})
export class ShoppingListComponent implements OnInit {

  constructor(private actions: ShoppingListActions) {
  }

  ngOnInit() {
  }

  @select() readonly shoppingList$: any;

  createItem(evt: any, input: any) {
    if (evt.which !== 13) return;// wait for ENTER
    this.actions.addShoppingItem(input.value);
    input.value = '';
    this.actions.findExcalibur(input.value);
  }
}
