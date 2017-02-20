import { Locator } from './locator';
import { Observable } from 'rxjs';

export class LocationService {

  constructor(private locator: Locator) {

  }

  sendCurrentLocation = () => {
    this.locator.getCurrentLocation()
      .subscribe((res: any) => {

      })
  }

}

