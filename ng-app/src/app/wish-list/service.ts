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
        indexNum: this.count++
      },
      {
        id: 1 + new Date().getMilliseconds(),
        name: 'two',
        created: new Date(),
        indexNum: this.count++
      }
    ]);

  addWishItems = (items: IWishItem[]): Observable<IWishItem[]> =>
    of([
      {
        id: new Date().getMilliseconds(),
        name: items[0].name,
        created: new Date(),
        indexNum: this.count++
      }
    ]).delay(100);

  removeWishItems = (items: IWishItem[]): Observable<IWishItem[]> => {
    this.count -= items.length;
    return of([...items]).delay(100);
  };
}
