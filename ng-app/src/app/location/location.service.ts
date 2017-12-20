import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
//
import { createOptions, getApiUrl } from '../common/rest-api.helper';
import { ICurrentLocation } from './location.model';

@Injectable()
export class LocationService {

  constructor(private http: Http) {
  }

  sendLocation = (location: ICurrentLocation) => {
    return this.http.post(getApiUrl() + '/location', location, createOptions().withHeader())
      .map(res => res.json().model);
  };
}


