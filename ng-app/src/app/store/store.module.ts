import { NgModule } from '@angular/core';
//
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { createLogger } from 'redux-logger';
import { NgReduxRouter, NgReduxRouterModule } from '@angular-redux/router';
import { provideReduxForms } from '@angular-redux/form';
//
import { IAppState, INIT_STATE } from './root-state.model';
import { rootReducer } from './root-reducer';
import { RootEpics } from './root-epics';

@NgModule({
  imports: [
    NgReduxModule,
    NgReduxRouterModule
  ],
  providers: [
    RootEpics]
})
export class StoreModule {

  constructor(public store: NgRedux<IAppState>,
              ngReduxRouter: NgReduxRouter,
              rootEpics: RootEpics) {
    store.configureStore(
      rootReducer,
      INIT_STATE,
      [createLogger(), ...rootEpics.createEpics()],
      []
    );
    if (ngReduxRouter) {
      ngReduxRouter.initialize();
    }
    provideReduxForms(store);
  }
}
