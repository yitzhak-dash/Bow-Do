import { Locator } from './locator';

export class LocationService {

  constructor(private locator: Locator) {

  }

  sendCurrentLocation() {
    this.locator.getCurrentLocation()
      .subscribe((res: any) => {
      })
  }

}

