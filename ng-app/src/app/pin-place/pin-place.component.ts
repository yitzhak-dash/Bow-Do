import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
//
import { Subscription } from 'rxjs/Subscription';
import { NgRedux, select } from '@angular-redux/store';
//
import { IPlace } from './model';
import { PinPlaceActions } from './actions';
import { IAppState } from '../store/root-state.model';
import { Observable } from 'rxjs/Observable';
import { LocationActions } from '../location/location.actions';
import { ICurrentLocation } from '../location/location.model';

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

  loadingIndicatorSubscription: Subscription;
  // TODO: find way to change to something like this.
  // @select((state: IAppState) => state.pinPlace.loading) isLoadingIndicator$: Observable<boolean>;
  @select(['pinPlace', 'loading']) isLoadingIndicator$: Observable<boolean>;

  constructor(private actions: PinPlaceActions,
              private locationActions: LocationActions,
              private ngRedux: NgRedux<IAppState>) {
  }

  pinPlace() {
    this.actions.turnOnLoading();
    this.locationActions.takeLocation();
    const sendingDate = new Date();
    const subscription = this.ngRedux.select<ICurrentLocation>(store => store.location)
      .subscribe(loc => {
        if (loc.date >= sendingDate) {
          this.model.location = loc.location;
          // normalize tags to model
          this.model.tags = this.model.tags.map((i: any) => i.value);
          this.actions.addNewPlace({...this.model});
          subscription.unsubscribe();
        }
      });
  }

  private subscribe() {
    this.loadingIndicatorSubscription = this.isLoadingIndicator$.subscribe(isLoading => {
      if (!isLoading) {
        console.log('loading');
        this.form.reset();
      }
    });
  }

  ngOnInit() {
    this.subscribe();
  }

  ngOnDestroy(): void {
    this.loadingIndicatorSubscription.unsubscribe();
  }
}
