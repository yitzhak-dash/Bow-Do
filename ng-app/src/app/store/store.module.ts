import { NgModule } from '@angular/core';
//
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { createLogger } from 'redux-logger';
import { NgReduxRouter, NgReduxRouterModule } from '@angular-redux/router';
//
import { IAppState } from './root-state.model';

@NgModule({
  imports: [
    NgReduxModule,
    NgReduxRouterModule
  ],
  declarations: []
})
export class StoreModule {

  constructor(public store: NgRedux<IAppState>,
              ngReduxRouter: NgReduxRouter) {
    
  }
}
