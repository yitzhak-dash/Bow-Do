import { Component, OnInit } from '@angular/core';
//
import { NgRedux } from '@angular-redux/store';
//
import { IAppState } from '../store/root-state.model';

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

  constructor(private redux: NgRedux<IAppState>) {
    // this.loadFromState(redux.getState().pinPlace.place);

    redux.subscribe(() => {
      // this.loadFromState(redux.getState().pinPlace.place);
    });
  }

  ngOnInit() {
  }

}
