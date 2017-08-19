import { Component, OnDestroy, OnInit } from '@angular/core';
//
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { Subscription } from 'rxjs/Subscription';
import { NgRedux } from '@angular-redux/store';
//
import { IAppState } from './store/root-state.model';
import { LocationActions } from './common/location.actions';
import { ILogin, ModalStatus } from './shared/login/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  private intervalSubscription: Subscription;
  private authRequired = false;
  private loginStateSubscription: Subscription;

  constructor(private locationActions: LocationActions,
              private ngRedux: NgRedux<IAppState>) {
    this.loginStateSubscription = ngRedux.select<ILogin>(state => state.login)
      .subscribe(loginState => {
        this.authRequired = loginState.modalStatus !== ModalStatus.none;
      })
  }

  ngOnInit(): void {
    // TODO: take the magic number from state/service
    const source = Observable.interval(20000);
    this.intervalSubscription = source.subscribe(() => this.locationActions.takeLocation());
  }

  ngOnDestroy(): void {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }
}
