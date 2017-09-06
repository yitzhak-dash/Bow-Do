import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
//
import { Observable } from 'rxjs/Observable';
import { NgRedux, select } from '@angular-redux/store';
//
import { WishListActions } from './actions';
import { IWishItem } from './model';
import { IAppState } from '../store/root-state.model';

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
  private listLength: number;

  constructor(private ngRedux: NgRedux<IAppState>,
              private actions: WishListActions) {
  }

  ngOnInit() {
    this.uncompletedItems$ = this.ngRedux.select(state => state.wishes.wishList)
      .map(item => item.filter(x => !x.completed));

    this.completedItems$ = this.ngRedux.select(state => state.wishes.wishList)
      .map(item => item.filter(x => x.completed));

    this.ngRedux.select(state => state.wishes.wishList).subscribe(state => this.listLength = state.length);

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
    this.actions.addWishItem(input.value, this.listLength);
    // clear user input
    input.value = '';
  }
}
