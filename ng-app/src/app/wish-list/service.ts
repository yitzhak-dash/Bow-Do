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
  count: number;

  constructor(private http: Http) {
    this.count = 0;
  }

  getWishItems = (): Observable<IWishItem[]> =>
    of([
      {
        id: new Date().getMilliseconds(),
        name: 'one',
        created: new Date(),
        indexNum: this.count++,
        checked: false
      },
      {
        id: this.count + new Date().getMilliseconds(),
        name: 'two',
        created: new Date(),
        indexNum: this.count++,
        checked: false
      }
    ]);

  addWishItems = (items: IWishItem[]): Observable<IWishItem[]> =>
    of(items.map(i =>
      ({
        id: new Date().getMilliseconds(),
        name: i.name,
        created: new Date(),
        indexNum: this.count++,
        checked: false
      })
    )).delay(100);

  removeWishItems = (items: IWishItem[]): Observable<IWishItem[]> => {
    this.count -= items.length;
    return of([...items]).delay(100);
  };

  completeWishItems = (items: IWishItem[]): Observable<IWishItem[]> =>
    of(items.map((item: IWishItem) => ({
      ...item,
      checked: true,
    })))
      .delay(100);
}
