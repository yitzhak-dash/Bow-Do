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
  readonly ENTER_KEY = 'Enter';

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
    console.log(evt);
    if (evt.key !== this.ENTER_KEY) {
      return;
    }
    this.actions.addShoppingItem(input.value);
    // clear user input
    input.value = '';
  }
}
