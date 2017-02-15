import { Observable, Observer } from 'rxjs';


export class LocationSimulator {

  getCurrentLocation() {
    return Observable.create((observer: any) => {
      navigator.geolocation.getCurrentPosition(function (location) {
        let geo = location.coords;
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