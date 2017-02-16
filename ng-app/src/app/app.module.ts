import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//
import { AppComponent }  from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found.component';
import { NgReduxModule } from 'ng2-redux';
import { ShoppingListActions } from './store/shopping-list.actions';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgReduxModule,
  ],
  providers: [ShoppingListActions],
  declarations: [
    AppComponent,
    SidebarComponent,
    ShoppingListComponent,
    PageNotFoundComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
