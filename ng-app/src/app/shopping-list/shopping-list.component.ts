import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { ShoppingListActions } from './actions';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  readonly ENTER_KEY = 13;

  @select() readonly shoppingList$: any;

  constructor(private actions: ShoppingListActions) {
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  createItem(evt: any, input: any) {
    // wait for ENTER
    if (evt.which !== this.ENTER_KEY) {
      return;
    }
    this.actions.addShoppingItem(input.value);
    input.value = '';
    // this.actions.findExcalibur(input.value);
  }

}
