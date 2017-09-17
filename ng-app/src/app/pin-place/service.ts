import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
//
import { Observable } from 'rxjs/Observable';
//
import { IPlace } from './model';

@Injectable()
export class PinPlaceService {

  private readonly baseUrl = 'http://localhost:4300/api/places';

  constructor(private http: Http) {
  }

  private getHeaders(): RequestOptions {
    const headers = new Headers({'Content-Type': 'application/json'});
    return new RequestOptions({headers: headers});
  }

  pinPlace = (place: IPlace): Observable<IPlace> =>
    this.http.post(this.baseUrl, place, this.getHeaders())
      .map(response => response.json().model);
}
