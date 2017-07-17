import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { PinPlaceComponent } from './pin-place/pin-place.component';
import { StoreModule } from './store/store.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ShoppingListComponent,
    PinPlaceComponent
  ],
  imports: [
    BrowserModule,
    StoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
