import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
//
import { GoeLocation } from './geo-location.model';



@Injectable()
export class Locator {

  getCurrentLocation(): Observable<any> {
    return Observable.create((observer: any) => {
      navigator.geolocation.getCurrentPosition((location) => {
        let geo = location.coords;
        observer.next(
          new GoeLocation(geo.latitude, geo.longitude, geo.accuracy)
        );
        observer.complete();
      });
    });
  }
}
