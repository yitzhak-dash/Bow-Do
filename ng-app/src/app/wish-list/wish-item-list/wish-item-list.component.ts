import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
//
import { Observable } from 'rxjs/Observable';
//
import { IWishItem } from '../model';
import { WishListActions } from '../actions';

@Component({
  selector: 'app-wish-item-list',
  templateUrl: './wish-item-list.component.html',
  styleUrls: ['./wish-item-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WishItemListComponent implements OnInit {

  @Input()
  items$: Observable<IWishItem[]>;

  constructor(private actions: WishListActions) {
  }

  ngOnInit() {
  }

  changeItemStatus(item: IWishItem) {
    this.actions.changeWishItemStatus(item);
  }

  removeItem(item: IWishItem) {
    this.actions.removeWishItem(item);
  }
}
