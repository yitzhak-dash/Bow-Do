import { Component } from '@angular/core';
import { NgRedux, DevToolsExtension } from 'ng2-redux';
//
import { AppState } from './store/app-state';
import { rootReducer } from './store/root-reducer';
import { Store, createStore } from 'redux';

@Component({
  selector: 'my-app',
  template: `<div className="app">
        <sidebar></sidebar>
        <router-outlet></router-outlet>
    </div>
`,
})

export class AppComponent {
  constructor(redux: NgRedux<AppState>) {

    let store: Store<AppState> = createStore(rootReducer);

    redux.provideStore(store);


    // redux.configureStore(rootReducer, {shoppingList: []});
  }
}
