import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
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

  private getHeaders(): RequestOptions {
    const headers = new Headers({'Content-Type': 'application/json'});
    return new RequestOptions({headers: headers});
  }

  getWishItems = (): Observable<IWishItem[]> =>
    this.http.get('http://localhost:4300/api/wish', this.getHeaders())
      .map(response => response.json());

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
      checked: !item.checked,
    }))).delay(100);
}
