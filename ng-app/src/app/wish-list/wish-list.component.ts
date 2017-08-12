import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { WishListActions } from './actions';
import { IWishItem } from './model';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WishListComponent implements OnInit, OnDestroy {
  readonly ENTER_KEY = 'Enter';

  @select(['wishes','wishList']) readonly wishList$: any;
  @select(['wishes','isLoading']) readonly isLoading: boolean;

  constructor(private actions: WishListActions) {
  }

  ngOnInit() {
    this.actions.loadWishItems();
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  createItem(evt: any, input: any) {
    // wait for ENTER
    if (evt.key !== this.ENTER_KEY) {
      return;
    }
    this.actions.addWishItem(input.value);
    // clear user input
    input.value = '';
  }

  removeItem(item: IWishItem) {
    this.actions.removeWishItem(item);
  }
}
