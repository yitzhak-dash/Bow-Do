import { Component } from '@angular/core';
import { LocationActions } from './common/location.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(locationActions: LocationActions) {
    locationActions.takeLocation();
  }
}
