import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
//
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { NgReduxModule, NgRedux } from 'ng2-redux';
//
import { AppComponent }  from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found.component';
import { ShoppingListActions } from './store/shopping-list.actions';
import { Locator } from './services/locator';
import { ShoppingListEpics } from './store/shopping-list.epics';
import { AppState } from './store/app-state';
import { rootReducer } from './store/root-reducer';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpModule,
    NgReduxModule,
  ],
  providers: [
    ShoppingListActions,
    Locator,
    ShoppingListEpics
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    ShoppingListComponent,
    PageNotFoundComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(redux: NgRedux<AppState>, shoppingListEpics: ShoppingListEpics) {
    redux.configureStore(rootReducer,
      {shoppingList: []},
      [
        createEpicMiddleware(combineEpics(...shoppingListEpics.epics)),
      ]);
  }

}
