import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
//
import { IPlace } from './model';

@Injectable()
export class PinPlaceService {

  constructor(private http: Http) {
  }

  pinPlace = (place: IPlace): Observable<IPlace> => {
    place.id = new Date().getMilliseconds();
    return of(place);
  };
}
