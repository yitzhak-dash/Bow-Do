import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
//
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
//
import { Locator } from './locator';


@Injectable()
export class LocationService {

  constructor(private http: Http, private locator: Locator) {

  }

  sendCurrentLocation = () => {
    this.locator.getCurrentLocation()
      .subscribe((res: any) => {

      });
  };

  getTagsByTerm = (term: string): Observable<string[]> => {
    return Observable.of<string[]>([term, `${term}1`, `${term}2`, `${term}3`]);
  };

  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}

