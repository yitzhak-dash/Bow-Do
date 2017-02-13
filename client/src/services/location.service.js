export class LocationService {

    constructor(locator){

    }

    sendCurrentLocation(){
        this.getCurrentPosition()
            .subscribe(res => {
            })
    }

}

