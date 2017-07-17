import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
//
import { GeoPosition } from './geo-location.model';


@Injectable()
export class Locator {

  getCurrentLocation(): Observable<any> {
    return Observable.create((observer: any) => {
      navigator.geolocation.getCurrentPosition((location) => {
        const geo = location.coords;
        observer.next(
          new GeoPosition(geo.longitude, geo.latitude, geo.accuracy)
        );
        observer.complete();
      });
    });
  }
}
