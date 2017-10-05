import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
//
import * as GeoJSON from 'geojson';
import { createOptions, getApiUrl } from '../common/rest-api.helper';

@Injectable()
export class LocationService {

  constructor(private http: Http) {
  }

  sendLocation = (location: GeoJSON.Point) => {
    return this.http.post(getApiUrl() + '/location', location, createOptions().withHeader())
      .map(res => res.json().model);
  };
}


