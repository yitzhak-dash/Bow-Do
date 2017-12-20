import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//
import { NgReduxModule } from '@angular-redux/store';
import { NgReduxRouterModule } from '@angular-redux/router';
import { TagInputModule } from 'ngx-chips';
import { MdButtonModule, MdCheckboxModule, MdInputModule, MdCardModule } from '@angular/material';
//
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { WishListComponent } from './wish-list/wish-list.component';
import { PinPlaceComponent } from './pin-place/pin-place.component';
import { StoreModule } from './store/store.module';
import { SideBarComponent } from './side-bar/side-bar.component';
import { WishListEpic } from './wish-list/epics';
import { WishListActions } from './wish-list/actions';
import { ShoppingListService } from './wish-list/service';
import { PinPlaceActions } from './pin-place/actions';
import { PinPlaceEpic } from './pin-place/epics';
import { PinPlaceService } from './pin-place/service';
import { Locator } from './services/locator';
import { WishItemListComponent } from './wish-list/wish-item-list/wish-item-list.component';
import { LocationEpic } from './location/location.epic';
import { LocationActions } from './location/location.actions';
import { LocationService } from './location/location.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    /* MATERIAL-ANGULAR */
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdCardModule,
    /* MATERIAL-ANGULAR */
    TagInputModule,
    FormsModule,
    HttpModule,
    NgReduxModule,
    NgReduxRouterModule,
    StoreModule,
  ],
  providers: [
    Locator,
    LocationEpic,
    LocationActions,
    LocationService,
    WishListEpic,
    WishListActions,
    ShoppingListService,
    PinPlaceActions,
    PinPlaceEpic,
    PinPlaceService],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    WishListComponent,
    PinPlaceComponent,
    SideBarComponent,
    WishItemListComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
