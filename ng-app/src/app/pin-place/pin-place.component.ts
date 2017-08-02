import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
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

  @ViewChild('pinPlaceForm') form;
  model: IPlace = {name: ''};
  private currentLocationSubscription: Subscription;

  constructor(private actions: PinPlaceActions,
              private locator: Locator) {
  }

  pinPlace() {
    this.actions.addNewPlace(this.model);
    // TODO: clear after completed
    //this.form.reset()
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.currentLocationSubscription.unsubscribe();
  }

}
