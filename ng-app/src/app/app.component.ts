import { Component, OnDestroy, OnInit } from '@angular/core';
//
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { Subscription } from 'rxjs/Subscription';
//
import { LocationActions } from './common/location.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  private intervalSubscription: Subscription;

  constructor(private locationActions: LocationActions) {
  }

  ngOnInit(): void {
    // TODO: take the magic number from state/service
    const source = Observable.interval(10000);
    this.intervalSubscription = source.subscribe(() => this.locationActions.takeLocation());
  }

  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
  }
}
