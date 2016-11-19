navigator.geolocation.getCurrentPosition(function (location) {
    var geo = location.coords;
    document.getElementById('geo-lat').innerHTML = 'lat: ' + geo.latitude;
    document.getElementById('geo-lng').innerHTML = 'lng: ' + geo.longitude;
    document.getElementById('geo-accuracy').innerHTML = 'accuracy: ' + geo.accuracy;
});

import Rx from 'rx';

export class LocationService {

    getCurrentPosition() {
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

