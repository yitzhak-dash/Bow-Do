import { Observable } from 'rxjs/Observable';

export class LocationSimulator {

  getCurrentLocation() {
    return Observable.create((observer: any) => {
      navigator.geolocation.getCurrentPosition(function (location) {
        const geo = location.coords;
        observer.onNext(
          {
            'lat': geo.latitude,
            'long: ': geo.longitude,
            'accuracy: ': geo.accuracy
          });
        observer.onCompleted();
      });
    });
  }
}
