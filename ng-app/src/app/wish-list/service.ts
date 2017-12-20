import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
//
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import { Observable } from 'rxjs/Observable';
//
import { IWishItem } from './model';

@Injectable()
export class ShoppingListService {

  private readonly baseUrl = 'http://localhost:4300/api/wish';

  constructor(private http: Http) {
  }

  private getHeaders(): RequestOptions {
    const headers = new Headers({'Content-Type': 'application/json'});
    return new RequestOptions({headers: headers});
  }

  getWishItems = (): Observable<IWishItem[]> =>
    this.http.get(this.baseUrl, this.getHeaders())
      .map(response => response.json());

  addWishItems = (items: IWishItem[]): Observable<IWishItem[]> =>
    this.http.post(this.baseUrl, items, this.getHeaders())
      .map(response => response.json().model);

  removeWishItems = (items: IWishItem[]): Observable<IWishItem[]> => {
    return this.http.post(this.baseUrl + '/delete', items)
      .map(response => response.json().model);
  };

  completeWishItems = (items: IWishItem[]): Observable<IWishItem[]> =>
    this.http.put(this.baseUrl, items)
      .map(response => response.json().model)
      .catch(err => {
        console.error(err.message);
        return Observable.throw(err);
      });

}
