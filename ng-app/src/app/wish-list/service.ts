import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import { Observable } from 'rxjs/Observable';
//
import { IWishItem } from './model';

@Injectable()
export class ShoppingListService {
  constructor(private http: Http) {
  }

  addWishListItem = (item: IWishItem): Observable<IWishItem> =>
    of({id: new Date().getMilliseconds(), name: item.name}).delay(500);

  removeWishItem = (item: IWishItem): Observable<IWishItem> =>
    of({...item}).delay(500);
}
