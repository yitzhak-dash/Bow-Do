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
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { PinPlaceComponent } from './pin-place/pin-place.component';
import { StoreModule } from './store/store.module';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ShoppingListEpic } from './shopping-list/epics';
import { ShoppingListActions } from './shopping-list/actions';
import { ShoppingListService } from './shopping-list/service';
import { PinPlaceActions } from './pin-place/actions';
import { PinPlaceEpic } from './pin-place/epics';
import { PinPlaceService } from './pin-place/service';

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
    ShoppingListEpic,
    ShoppingListActions,
    ShoppingListService,
    PinPlaceActions,
    PinPlaceEpic,
    PinPlaceService],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ShoppingListComponent,
    PinPlaceComponent,
    SideBarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
