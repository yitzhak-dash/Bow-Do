import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
//
import { NgRedux } from '@angular-redux/store';
//
import { IAppState } from '../store/root-state.model';
import { IPlace } from './model';
import { PinPlaceActions } from './actions';

// TODO: remove submit by enter
// TODO: load tags from the server
// TODO: clear auto-complete input.
// TODO: clear auto-complete list after cleaning input

@Component({
  selector: 'app-pin-place',
  templateUrl: './pin-place.component.html',
  styleUrls: ['./pin-place.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PinPlaceComponent implements OnInit {
  model: IPlace = {name: ''};

  constructor(private actions: PinPlaceActions) {
  }

  pinPlace() {
    this.actions.addNewPlace(this.model);
  }

  ngOnInit() {
  }

}
