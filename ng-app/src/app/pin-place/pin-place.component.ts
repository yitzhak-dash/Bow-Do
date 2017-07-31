import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
//
import { Subscription } from 'rxjs/Subscription';
//
import { IPlace } from './model';
import { PinPlaceActions } from './actions';
import { Locator } from '../services/locator';

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
export class PinPlaceComponent implements OnInit, OnDestroy {

  model: IPlace = {name: ''};
  private currentLocationSubscription: Subscription;

  constructor(private actions: PinPlaceActions,
              private locator: Locator) {
  }

  pinPlace() {
    this.currentLocationSubscription = this.locator.getCurrentLocation()
      .subscribe(loc => {
        this.model.location = loc;
        this.actions.addNewPlace(this.model);
      });
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.currentLocationSubscription.unsubscribe();
  }

}
