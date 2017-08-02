import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
//
import { Subscription } from 'rxjs/Subscription';
import { select } from '@angular-redux/store';
//
import { IPlace } from './model';
import { PinPlaceActions } from './actions';
import { IAppState } from '../store/root-state.model';
import { Observable } from 'rxjs/Observable';

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
  @select(['state', 'pinPlace', 'loading']) isLoadingIndicator$: Observable<boolean>;


  constructor(private actions: PinPlaceActions) {
  }


  pinPlace() {
    this.actions.addNewPlace(this.model);
  }

  private subscribe() {
    this.loadingIndicatorSubscription = this.isLoadingIndicator$.subscribe(isLoading => {
      if (!isLoading) {
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
