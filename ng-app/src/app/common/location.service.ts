import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//
import * as GeoJSON from 'geojson';

@Injectable()
export class LocationService {

  constructor(private http: Http) {
  }

  sendLocation = (location: GeoJSON.Point) => {

  };
}
