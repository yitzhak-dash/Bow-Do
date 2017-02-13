import Rx from 'rx';


export class Locator {

    getCurrentLocation() {
        return Rx.Observable.create((observer) => {
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