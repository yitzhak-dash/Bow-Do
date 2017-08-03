import { Injectable } from '@angular/core';
//
import { Observable } from 'rxjs/Observable';
import * as GeoJSON from 'geojson';

@Injectable()
export class Locator {

  getCurrentLocation(): Observable<GeoJSON.Point> {
    return Observable.create((observer: any) => {
      navigator.geolocation.getCurrentPosition((location) => {
        // contains these -> (geo.longitude, geo.latitude, geo.accuracy)
        const geo = location.coords;
        const result: GeoJSON.Point = {
          type: 'Point',
          coordinates: [geo.latitude, geo.longitude],
        };
        observer.next(result);
        observer.complete();
      });
    });
  }
}
