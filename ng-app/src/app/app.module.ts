import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import 'hammerjs';
import { MaterialModule, MdSelectModule } from '@angular/material';

//
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { NgReduxModule, NgRedux } from 'ng2-redux';
import { RlTagInputModule } from 'angular2-tag-input';
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
import { PinPlaceComponent } from './pin-place/pin-place.component';
import { FormsModule } from '@angular/forms';
import { PinPlaceEpics } from './store/pin-place.epics';
import { PinPlaceActions } from './store/pin-place.actions';
import { LocationService } from './services/location.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule,
    MdSelectModule,
    NgReduxModule,
    RlTagInputModule
  ],
  providers: [
    Locator,
    LocationService,
    ShoppingListActions,
    ShoppingListEpics,
    PinPlaceEpics,
    PinPlaceActions
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    ShoppingListComponent,
    PinPlaceComponent,
    PageNotFoundComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(redux: NgRedux<AppState>,
              shoppingListEpics: ShoppingListEpics,
              pinPlaceEpics: PinPlaceEpics) {
    redux.configureStore(rootReducer,
      {shoppingList: [], pinPlace: {filteredTags: [], place: {}}},
      [
        createEpicMiddleware(combineEpics(
          ...shoppingListEpics.epics,
          ...pinPlaceEpics.epics)),
      ]);
  }

}
