import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
//
import { IShoppingItem } from './model';

@Injectable()
export class ShoppingListService {
  constructor(private http: Http) {
  }

  addShoppingListItem = (item: IShoppingItem): Observable<IShoppingItem> =>
    of({id: new Date().getMilliseconds(), name: item.name})
}
