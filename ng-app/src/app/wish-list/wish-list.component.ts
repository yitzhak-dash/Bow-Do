import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
//
import { Observable } from 'rxjs/Observable';
import { NgRedux, select } from '@angular-redux/store';
//
import { WishListActions } from './actions';
import { IWishItem } from './model';
import { IAppState } from '../store/root-state.model';
import { zip } from 'rxjs/observable/zip';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WishListComponent implements OnInit, OnDestroy {
  readonly ENTER_KEY = 'Enter';

  @select(['wishes', 'isLoading']) readonly isLoading: boolean;
  uncompletedItems$: Observable<IWishItem[]>;
  completedItems$: Observable<IWishItem[]>;

  constructor(private ngRedux: NgRedux<IAppState>,
              private actions: WishListActions) {
  }

  ngOnInit() {
    this.uncompletedItems$ = this.ngRedux.select(state => state.wishes.wishList)
      .map(item => item.filter(x => !x.checked));

    this.completedItems$ = this.ngRedux.select(state => state.wishes.wishList)
      .map(item => item.filter(x => x.checked));

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

  completeItem(item: IWishItem) {
    this.actions.completeWishItem(item);
  }
}
