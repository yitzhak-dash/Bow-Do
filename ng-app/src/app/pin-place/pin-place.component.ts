import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';

// TODO: remove submit by enter
// TODO: load tags from the server
// TODO: clear auto-complete input.
// TODO: clear auto-complete list after cleaning input

@Component({
  selector: 'pin-place',
  templateUrl: './pin-place.component.html',
  styleUrls: ['./pin-place.component.css']
})
export class PinPlaceComponent implements OnInit {

  constructor(private actions: PinPlaceActions, private redux: NgRedux<AppState>) {
    this.loadFromState(redux.getState().pinPlace.place);

    redux.subscribe(() => {
      this.loadFromState(redux.getState().pinPlace.place);
    });
  }

  ngOnInit() {
  }

}
